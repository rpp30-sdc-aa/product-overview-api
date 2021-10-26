const path = require('path');

module.exports = {
  productsCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/product.csv'),
  featuresCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/features.csv'),
  stylesCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/styles.csv'),
  skusCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/skus.csv'),
  photosCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/photos.csv'),
  relatedCsvFilePath: path.join(__dirname, 'MongoDB ETL', '/related.csv'),
};
