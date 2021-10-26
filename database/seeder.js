const csvFilePath = require('../config');
const loader = require('./loader');

module.exports.populateDatabase = () => {
  // Seed Product Collection
  loader.seedProductCollection(csvFilePath.productsCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });

  // Seed Feature Collection
  loader.seedFeatureCollection(csvFilePath.featuresCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });
  // Seed Style Collection
  loader.seedStyleCollection(csvFilePath.stylesCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });

  // Seed Skus collection
  loader.seedSkuCollection(csvFilePath.skusCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });

  // Seed Photos Collection
  loader.seedPhotoCollection(csvFilePath.photosCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });

  // Seed RelatedProducts collection
  loader.seedRelatedProductCollection(csvFilePath.relatedCsvFilePath)
    .then((docCount) => {
      console.log(`${docCount} has been inserted successfully`);
    })
    .catch((error) => {
      console.log(`Error happened while inserting data ${error}`);
    });
};
