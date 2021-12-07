const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCurrencyInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.name, { min: 2, max: 20 })){
    errors.name = 'Name must between 2 and 20 characters.'
  }

  if (!Validator.isEmpty(data.name)){
    errors.name = 'Name is required.'
  }

  if (!Validator.isEmpty(data.description)){
    errors.description = 'Description is required.'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}