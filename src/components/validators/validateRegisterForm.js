import validator from "validator";
import { isEmpty } from "../utils/Utils";

const validateRegisterForm = data => {
  const errors = {};

  if (isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 15 })) {
    errors.password = "Password must be between 6 and 15 characters";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match.";
  }

  return errors;
};

export default validateRegisterForm;
