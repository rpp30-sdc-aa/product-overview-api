const express = require('express');
const db = require('./database/seeder');
const aggregate = require('./database/aggregation');

const app = express();
let isDbAlreadyPopulated = true; // change it later when deploying

// The following methods should run only one time
if (!isDbAlreadyPopulated) {
  db.populateDatabase();
  // make isDbAlreadyPopulated true
}

// aggregate.createProductInformationsCollection()
//   // eslint-disable-next-line no-unused-vars
//   .then((result) => {
//     console.log('Created prodcutinformations collection successfully');
//   })
//   .catch((error) => {
//     console.log('Error happened when creating prodcutinformations table ', error);
//   });

// aggregate.createStylesWithPhotosAndSkuCollection()
//   // eslint-disable-next-line no-unused-vars
//   .then((result) => {
//     console.log('Created createStylesWithPhotosAndSkuCollection collection successfully');
//   })
//   .catch((error) => {
//     console.log('Error happened when creating createStylesWithPhotosAndSkuCollection table ', error);
//   });

// aggregate.createProductStyleCollection()
//   // eslint-disable-next-line no-unused-vars
//   .then((result) => {
//     console.log('Successfully created the productstyles collection');
//   })
//   .catch((err) => {
//     console.log('Error happened while creating the productstyles collection ', err);
//   });

aggregate.createRelatedProductCollection()
  // eslint-disable-next-line no-unused-vars
  .then((results) => {
    console.log('Successfully created relatedproducts collection');
  })
  .catch((error) => {
    console.log('Error happened while creating the relatedproducts collection ', error);
  });

const port = 3333;
app.listen(port, () => {
  console.log('Atelier Server is running on PORT ', port);
});
