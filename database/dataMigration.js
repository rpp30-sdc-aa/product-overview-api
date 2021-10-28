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
    // eslint-disable-next-line no-unused-expressions
    (async () => {
      await db.populateDatabase();
      // make isDbAlreadyPopulated true
      // Run the aggregation pipeline now
      aggregate.createProductInformationsCollection()
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
          console.log('Created prodcutinformations collection successfully');
          aggregate.createStylesWithPhotosAndSkuCollection()
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
              console.log('Created createStylesWithPhotosAndSkuCollection collection successfully');
              aggregate.createProductStyleCollection()
                // eslint-disable-next-line no-unused-vars
                .then((result) => {
                  console.log('Successfully created the productstyles collection');
                  aggregate.createRelatedProductCollection()
                    // eslint-disable-next-line no-unused-vars
                    .then((results) => {
                      console.log('Successfully created relatedproducts collection');
                      resolve('Complete');
                    })
                    .catch((error) => {
                      console.log('Error happened while creating the relatedproducts collection ', error);
                      reject(error);
                    });
                })
                .catch((err) => {
                  console.log('Error happened while creating the productstyles collection ', err);
                  reject(err);
                });
            })
            .catch((error) => {
              console.log('Error happened when creating createStylesWithPhotosAndSkuCollection table ', error);
              reject(error);
            });
        })
        .catch((error) => {
          console.log('Error happened when creating prodcutinformations table ', error);
          reject(error);
        });
    });
  }
});
