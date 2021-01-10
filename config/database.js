const mongoose = require('mongoose');

//DEV
module.exports = mongoose.connect('mongodb://localhost/db_finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
