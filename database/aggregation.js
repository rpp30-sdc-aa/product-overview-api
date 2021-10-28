const db = require('./model');

// This is the aggregation pipeline file.
// For the endpoint GET GET /products, there's no need to do aggregation
// We can use the products collection for that.
// Collection name: products

// For GET /products/:product_id endpoint, we need a collection
// which has all the information from the products collection
// and also has the features array. So we need to add features field to it.
// And create a new collection called productinformations
module.exports.createProductInformationsCollection = () => new Promise((resolve, reject) => {
  db.Product.aggregate([
    {
      $lookup: {
        from: 'features',
        localField: 'id',
        foreignField: 'product_id',
        as: 'features',
      },
    },
    {
      $out: 'productinformations',
    },
  ], (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

// For GET /products/:product_id/styles endpoint, we need to do couple of things.
// First, We need to keep only the field id from products collection
// Second, then rename the id field to product_id
// Third, in the styles collection, rename the default_style to default? as per the API response
// Fourth, add a new field photos to the styles collection
// Fifth, add a new field skus to the style collection
// Lastly, join the styles collection with the products collection
// and, create a new collection called productstyles

module.exports.createStylesWithPhotosAndSkuCollection = () => new Promise((resolve, reject) => {
  db.Style.updateMany({}, { $rename: { default_style: 'default?' } }, (err, done) => {
    if (err) {
      reject(err);
    } else {
      db.Style.aggregate([
        {
          $lookup: {
            from: 'photos',
            localField: 'id',
            foreignField: 'styleId',
            as: 'photos',
          },
        },
        {
          $lookup: {
            from: 'skus',
            localField: 'id',
            foreignField: 'styleId',
            as: 'skus',
          },
        },
        {
          $addFields: {
            skus: {
              $arrayToObject: {
                $map: {
                  input: '$skus',
                  in: {
                    k: { $toString: '$$this.id' },
                    v: '$$this',
                  },
                },
              },
            },
          },
        },
        {
          $out: 'styleswithphtosandskus',
        },
      ], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
});

module.exports.createProductStyleCollection = () => new Promise((resolve, reject) => {
  db.Product.updateMany({}, { $rename: { id: 'product_id' } }, (err, done) => {
    if (err) {
      reject(err);
    } else {
      db.Product.aggregate([
        {
          $project: { product_id: 1 },
        },
        {
          $lookup: {
            from: 'styleswithphtosandskus',
            localField: 'product_id',
            foreignField: 'productId',
            as: 'results',
          },
        },
        {
          $out: 'productstyles',
        },
      ], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
});

// GET /products/:product_id/related endpoint, we need a relatedproducts collection
// where theier will be a product_id and an array with related products id
module.exports.createRelatedProductCollection = () => new Promise((resolve, reject) => {
  db.Product.updateMany({}, { $rename: { id: 'product_id' } }, (err, done) => {
    if (err) {
      reject(err);
    } else {
      db.Product.aggregate([
        {
          $project: { product_id: 1 },
        },
        {
          $lookup: {
            from: 'relatedproducts',
            localField: 'product_id',
            foreignField: 'current_product_id',
            as: 'results',
          },
        },
        {
          $addFields: {
            results: {
              $map: {
                input: '$results',
                in: '$$this.related_product_id',
              },
            },
          },
        },
        {
          $out: 'allrelatedproducts',
        },
      ], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
});
