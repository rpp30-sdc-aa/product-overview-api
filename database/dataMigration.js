/* eslint-disable no-unused-vars */
const db = require('./seeder');
const aggregate = require('./aggregation');

// First we need to seed the database
// Then, run the aggregation pipeline

const isDbAlreadyPopulated = true; // change it later when deploying

// The following methods should run only one time
module.exports.migrateData = () => new Promise((resolve, reject) => {
  if (isDbAlreadyPopulated) {
    resolve('Already completed');
  } else if (!isDbAlreadyPopulated) {
    // make isDbAlreadyPopulated true
    // Run the aggregation pipeline now
    db.populateDatabase()
      .then((result) => aggregate.createProductInformationsCollection())
      .then((result) => {
        console.log('Created prodcutinformations collection successfully');
        return aggregate.createStylesWithPhotosAndSkuCollection();
      })
      .then((result) => {
        console.log('Created createStylesWithPhotosAndSkuCollection collection successfully');
        return aggregate.createProductStyleCollection();
      })
      .then((result) => {
        console.log('Successfully created the productstyles collection');
        return aggregate.createRelatedProductCollection();
      })
      .then((result) => {
        console.log('Successfully created relatedproducts collection');
        resolve('Complete');
      })
      .catch((error) => {
        console.log('Error happened when creating collection ', error);
        reject(error);
      });
  }
});
