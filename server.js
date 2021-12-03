require('dotenv').config();
if (process.env.NEW_RELIC_TURN === 'ON') {
  const newrelic = require('newrelic');
}
const express = require('express');
const cors = require('cors');
const database = require('./database/dataMigration');
const productController = require('./controllers/getProducts');
const productInfoController = require('./controllers/getProductInformation');
const productStyleController = require('./controllers/getProductStyles');
const relatedProductController = require('./controllers/getRelatedProducts');

const app = express();
const port = 3333;

app.use(cors());
app.use(express.static('public'));

database.migrateData()
  .then((done) => {
    console.log('Data Migration: ', done);
  })
  .catch((error) => {
    console.log('Database migration failed ', error);
  });

app.get('/products', productController.getProducts);
app.get('/products/:product_id', productInfoController.getProductInformations);
app.get('/products/:product_id/styles', productStyleController.getProductStyles);
app.get('/products/:product_id/related', relatedProductController.getRelatedProducts);

app.listen(port, () => {
  console.log('Atelier Server is running on PORT ', port);
});
