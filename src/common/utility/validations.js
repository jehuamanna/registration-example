export const validateFirstName = (firstName) => {
  if (firstName === "") {
    return "Field can't be empty";
  } else if (!/^[a-zA-Z]+$/.test(firstName)) {
    return "Only alphabets";
  }
  return "";
};

export const validateLastName = (lastName) => {
  if (lastName === "") {
    return "Field can't be empty";
  } else if (!/^[a-zA-Z]+$/.test(lastName)) {
    return "Only alphabets";
  }
  return "";
};

export const validateAge = (age) => {
  if (age === "") {
    return "Field can't be empty";
  } else if (!/^\d+$/.test(age)) {
    return "Only Numbers";
  } else if (age < 18 || age > 100) {
    return "Invalid age";
  }
  return "";
};

export const validateMobileNumber = (mobileNumber) => {
  if (mobileNumber === "") {
    return "Field can't be empty";
  } else if (!/^\d+$/.test(mobileNumber)) {
    return "Only Numbers";
  } else if (mobileNumber.length !== 10) {
    return "Invalid mobile number";
  }
  return "";
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email === "") {
    return "Field can't be empty";
  } else if (!re.test(email)) {
    return "Invalid email";
  }
  return "";
};

export const validateDescription = (description) => {
  if (description.length > 150) {
    return `Maximum length exceeded. Total ${description.length} characters`;
  }
};

export const validatePassword = (password) => {
  if (password === "") {
    return "Field can't be empty";
  }
  return "";
};

export const validateConfirmPassword = (confirmPassword) => {
  if (confirmPassword === "") {
    return "Field can't be empty";
  }
};
export const matchPassword = (password, confirmPassword) => {
  console.log("match", password, confirmPassword);
  if (password !== confirmPassword) {
    return "Passwords don't match";
  }
  return "";
};
