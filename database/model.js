const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/atelier')
  .catch((error) => console.log(error));
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// products Schema
const products = mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
}, { strict: false });

// Creating the Product model
const Product = mongoose.model('products', products);

// features schema
const features = mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String,
}, { strict: false });

// Feature Model
const Feature = mongoose.model('features', features);

// styles schema
const styles = mongoose.Schema({
  id: Number,
  productId: Number,
  name: String,
  sale_price: String,
  original_price: String,
  default_style: String,
}, { strict: false });

// Style Model
const Style = mongoose.model('styles', styles);

// photos schema
const photos = mongoose.Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String,
}, { strict: false });

// Photo Model
const Photo = mongoose.model('photos', photos);

// skus schema
const skus = mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: String,
}, { strict: false });

// Sku Model
const Sku = mongoose.model('skus', skus);

// related Schema
const relatedproducts = mongoose.Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number,
}, { strict: false });

// RelatedProduct model
const RelatedProduct = mongoose.model('relatedproducts', relatedproducts);

// Model for all products
const AllProduct = mongoose.model('allproducts', products);

// Model for productinformations
const productinformationsSchema = mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [features],
}, { strict: false });
const ProductInformation = mongoose.model('productinformations', productinformationsSchema);

// Model for ProductStyles
const addedstylesSchema = {
  id: Number,
  productId: Number,
  name: String,
  sale_price: String,
  original_price: String,
  'default?': String,
  photos: [photos],
  skus: skus,
};
const productStylesSchema = mongoose.Schema({
  product_id: Number,
  results: [addedstylesSchema],
}, { strict: false });
const ProductStyles = mongoose.model('productstyles', productStylesSchema);

// All Related Products Schema
const allrelatedproducts = mongoose.Schema({
  product_id: Number,
  resuslts: [Number],
}, { strict: false });

const AllRelatedProduct = mongoose.model('allrelatedproducts', allrelatedproducts);

module.exports.Product = Product;
module.exports.Feature = Feature;
module.exports.Style = Style;
module.exports.Photo = Photo;
module.exports.Sku = Sku;
module.exports.RelatedProduct = RelatedProduct;
module.exports.AllProduct = AllProduct;
module.exports.ProductInformation = ProductInformation;
module.exports.ProductStyles = ProductStyles;
module.exports.AllRelatedProduct = AllRelatedProduct;
