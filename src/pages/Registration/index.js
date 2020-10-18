import React, { useState } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

import {
  validateFirstName,
  validateLastName,
  validateAge,
  validateMobileNumber,
  validateEmail,
  validateDescription,
  validatePassword,
  validateConfirmPassword,
  matchPassword,
} from "../../common/utility/validations";

const Registration = () => {
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 767px)");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [mobileNumberErrorMessage, setMobileNumberErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [
    confirmPasswordErrorMessage,
    setConfirmPasswordErrorMessage,
  ] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    setFirstNameErrorMessage(validateFirstName(firstName));
    setLastNameErrorMessage(validateLastName(lastName));
    setAgeErrorMessage(validateAge(age));
    setMobileNumberErrorMessage(validateMobileNumber(mobileNumber));
    setEmailErrorMessage(validateEmail(email));
    setDescriptionErrorMessage(validateDescription(description));
    setPasswordErrorMessage(validatePassword(password));
    setConfirmPasswordErrorMessage(validateConfirmPassword(confirmPassword));
    matchPassword(password, confirmPassword);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setMobileNumber("");
    setEmail("");
    setDescription("");
    setPassword("");
    setConfirmPassword("");

    setFirstNameErrorMessage("");
    setLastNameErrorMessage("");
    setAgeErrorMessage("");
    setMobileNumberErrorMessage("");
    setEmailErrorMessage("");
    setDescriptionErrorMessage("");
    setPasswordErrorMessage("");
    setConfirmPasswordErrorMessage("");

    setSuccess(false);
  };

  const handleSubmit = () => {
    validate();
    if (
      !firstNameErrorMessage &&
      !lastNameErrorMessage &&
      !ageErrorMessage &&
      !mobileNumberErrorMessage &&
      !emailErrorMessage &&
      !descriptionErrorMessage &&
      !passwordErrorMessage &&
      !confirmPasswordErrorMessage
    ) {
      setSuccess(true);
    }
  };

  const setStateErrorMessages = [
    (value) => setFirstNameErrorMessage(validateFirstName(value)),
    (value) => setLastNameErrorMessage(validateLastName(value)),
    (value) => setAgeErrorMessage(validateAge(value)),
    (value) => setMobileNumberErrorMessage(validateMobileNumber(value)),
    (value) => setEmailErrorMessage(validateEmail(value)),
    (value) => setDescriptionErrorMessage(validateDescription(value)),
    (value) => setPasswordErrorMessage(validatePassword(value)),
    (value) => setConfirmPasswordErrorMessage(validateConfirmPassword(value)),
  ];

  const setFormStates = [
    (value) => setFirstName(value),
    (value) => setLastName(value),
    (value) => setAge(value),
    (value) => setMobileNumber(value),
    (value) => setEmail(value),
    (value) => setDescription(value),
    (value) => setPassword(value),
    (value) => setConfirmPassword(value),
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStateErrorMessages[id](value);
    setFormStates[id](value);
    if ("6" === id) {
      setConfirmPasswordErrorMessage(matchPassword(value, confirmPassword));
    } else if ("7" === id) {
      setConfirmPasswordErrorMessage(matchPassword(password, value));
    }
  };
  return isMobile ? (
    <Mobile
      isMobile={isMobile}
      firstName={firstName}
      firstNameErrorMessage={firstNameErrorMessage}
      lastName={lastName}
      lastNameErrorMessage={lastNameErrorMessage}
      age={age}
      ageErrorMessage={ageErrorMessage}
      mobileNumber={mobileNumber}
      mobileNumberErrorMessage={mobileNumberErrorMessage}
      email={email}
      emailErrorMessage={emailErrorMessage}
      description={description}
      descriptionErrorMessage={descriptionErrorMessage}
      password={password}
      passwordErrorMessage={passwordErrorMessage}
      confirmPassword={confirmPassword}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      handleChange={handleChange}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      success={success}
    />
  ) : (
    <Desktop
      firstName={firstName}
      firstNameErrorMessage={firstNameErrorMessage}
      lastName={lastName}
      lastNameErrorMessage={lastNameErrorMessage}
      age={age}
      ageErrorMessage={ageErrorMessage}
      mobileNumber={mobileNumber}
      mobileNumberErrorMessage={mobileNumberErrorMessage}
      email={email}
      emailErrorMessage={emailErrorMessage}
      description={description}
      descriptionErrorMessage={descriptionErrorMessage}
      password={password}
      passwordErrorMessage={passwordErrorMessage}
      confirmPassword={confirmPassword}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      handleChange={handleChange}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      success={success}
    />
  );
};

export default Registration;
