const db = require('../database/model');

module.exports.getProducts = (req, res) => {
  let { page, count } = req.query;
  page = Number(page) || 1;
  count = Number(count) || 5;
  db.AllProduct.find({}).skip((page - 1) * 10).limit(count).exec((error, products) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(products);
    }
  });
};
