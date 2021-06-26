import Validation from "./Regex";

export const checkNameValidation = (name) => {
  const nameRegex = new RegExp(Validation.ONLY_TEXT);
  return nameRegex.test(name);
};

export const checkEmailValidation = (email) => {
  const emailRegex = new RegExp(Validation.EMAIL);
  return emailRegex.test(email);
};

export const checkPasswordValidation = (passwd) => {
  const passwordRegex = new RegExp(Validation.PASSWORD);
  return passwordRegex.test(passwd);
};
