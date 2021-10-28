const fs = require('fs');
const csvtojson = require('csvtojson');
const db = require('./model');

// Read the products.csv file
module.exports.seedProductCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.Product.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.Product.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});

// Read the features.csv file
module.exports.seedFeatureCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.Feature.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.Feature.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});

// Read the styles.csv file
module.exports.seedStyleCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.Style.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.Style.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});

// Read the skus.csv file
module.exports.seedSkuCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.Sku.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.Sku.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});

// Read the photos.csv file
module.exports.seedPhotoCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.Photo.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.Photo.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});

// Read the related.csv file
module.exports.seedRelatedProductCollection = (filepath) => new Promise((resolve, reject) => {
  let documents = [];
  let counter = 0;
  const stream = fs.createReadStream(filepath);
  csvtojson()
    .fromStream(stream)
    .subscribe(async (json) => {
      if (documents.length >= 100) {
        stream.pause();
        try {
          documents.push(json);
          await db.RelatedProduct.insertMany(documents);
          counter += documents.length;
          documents = [];
          stream.resume();
        } catch (error) {
          reject(error);
        }
      } else {
        documents.push(json);
      }
    }, () => {}, async () => {
      if (documents.length > 0) {
        try {
          await db.RelatedProduct.insertMany(documents);
          counter += documents.length;
        } catch (err) {
          reject(err);
        }
      }
      resolve(counter);
    });
});
