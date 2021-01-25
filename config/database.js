const mongoose = require('mongoose');

//DEV
module.exports = mongoose.connect('mongodb://localhost/db_finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}.'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}.'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}.'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."