const express = require('express');
const db = require('./database/seeder');

const app = express();

// db.populateDatabase();

const port = 3333;
app.listen(port, () => {
  console.log('Atelier Server is running on PORT ', port);
});
