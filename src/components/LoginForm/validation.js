import Validator from 'validator';
import isEmpty from 'lodash.isempty';

const validateInput = data => {
  const errors = {};
  if (!Validator.isEmail(data.loginEmail)) {
    errors.loginEmail = 'Please enter valid email address';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter password';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default validateInput;
