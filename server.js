const express = require('express');
const database = require('./database/dataMigration');

const app = express();

database.migrateData()
  .then((done) => {
    console.log('Data Migration Successful ', done);
  })
  .catch((error) => {
    console.log('Database migration failed ', error);
  });
const port = 3333;
app.listen(port, () => {
  console.log('Atelier Server is running on PORT ', port);
});
