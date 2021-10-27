const db = require('../database/model');

module.exports.getProducts = (req, res) => {
  // Need to work on Page Count and Params
  db.AllProduct.find({}).limit(5).exec((error, products) => {
    if (error) {
      console.log(error);
      res.status(500).send('Sorry Data could not be found');
    } else {
      res.status(200).send(products);
    }
  });
};
