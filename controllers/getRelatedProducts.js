const db = require('../database/model');

module.exports.getRelatedProducts = (req, res) => {
  const productId = req.params.product_id;
  db.AllRelatedProduct.findOne({ product_id: productId }, (error, productInfo) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(productInfo);
    }
  });
};
