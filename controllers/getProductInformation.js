const db = require('../database/model');

module.exports.getProductInformations = (req, res) => {
  const productId = req.params.product_id;
  db.ProductInformation.findOne({ id: productId }, (error, productInfo) => {
    if (error) {
      res.status(500).send('Sorry Data could not be found');
    } else {
      res.status(200).send(productInfo);
    }
  });
};
