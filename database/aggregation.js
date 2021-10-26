const db = require('./model');
// This is the aggregation pipeline file.
// For the endpoint GET GET /products, there's no need to do aggregation
// We can use the products collection for that.
// Collection name: products

// For GET /products/:product_id endpoint, we need a collection
// which has all the information from the products collection
// and also has the features array. So we need to add features field to it.
// And create a new collection called productinformations
module.exports.createProductInformationsCollection = () => {
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
  ]);
};
