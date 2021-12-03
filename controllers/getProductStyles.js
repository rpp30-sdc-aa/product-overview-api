const db = require('../database/model');
const logger = require('../logs/logger');

module.exports.getProductStyles = (req, res) => {
  const productId = req.params.product_id;
  db.ProductStyles.findOne({ product_id: productId }, (error, productInfo) => {
    if (error) {
      logger.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).send(productInfo);
    }
  });
};
