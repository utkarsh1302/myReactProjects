const Validation = {
  EMAIL: "^([a-z\\d\\.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$",
  PASSWORD:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
  ONLY_TEXT: "^[a-zA-Z ]*$",
};

export default Validation;
