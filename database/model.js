const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/atelier')
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

const skus = mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: String,
}, { strict: false });

// Sku Model
const Sku = mongoose.model('skus', skus);

