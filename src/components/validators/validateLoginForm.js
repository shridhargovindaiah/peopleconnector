import validator from "validator";
import { isEmpty } from "../utils/Utils";

const validateInputForm = data => {
  const errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return errors;
};

export default validateInputForm;
