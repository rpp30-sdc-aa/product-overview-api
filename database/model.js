const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .catch((error) => console.log(error));
mongoose.connection.on('error', (err) => {
  console.log(err);
});

