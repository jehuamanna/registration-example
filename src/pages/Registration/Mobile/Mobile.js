import React, { useState } from "react";
import Input from "../../../common/components/input/Input";
import Card from "../../../common/components/card/Card";
import TextArea from "../../../common/components/input/TextArea";
import MobileBannerImage from "../../../common/assets/images/mobile-banner.png";
import stringConstants from "../../../common/constants/stringConstants";
import {
  OuterContainer,
  CreateAccount,
  InputContainer,
  Buttons,
  ButtonReset,
  ButtonSubmit,
  Success,
} from "./StyledComponents";
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
} from "../../../common/utility/validations";

const {
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  LABEL_AGE,
  LABEL_MOBILE_NUMBER,
  LABEL_EMAIL,
  LABEL_DESCRIPTION,
  LABEL_PASSWORD,
  LABEL_CONFIRM_PASSWORD,

  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_LAST_NAME,
  PLACEHOLDER_AGE,
  PLACEHOLDER_MOBILE_NUMBER,
  PLACEHOLDER_EMAIL,

  CARD_LABEL_PERSONAL_DETAILS,
  CARD_LABEL_PASSWORD,
} = stringConstants;

const Mobile = (props) => {
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
    console.log("lol", password, e.target);
    const { id, value } = e.target;
    setStateErrorMessages[id](value);
    setFormStates[id](value);
    if ("6" === id) {
      setConfirmPasswordErrorMessage(matchPassword(value, confirmPassword));
    } else if ("7" === id) {
      setConfirmPasswordErrorMessage(matchPassword(password, value));
    }
  };

  return (
    <>
      <OuterContainer>
        <img src={MobileBannerImage} width="100%" height="100%" alt="banner" />
        <CreateAccount>Create an account</CreateAccount>
        <InputContainer>
          <Card label={CARD_LABEL_PERSONAL_DETAILS}>
            <Input
              isMobile={false}
              type="text"
              label={LABEL_FIRST_NAME}
              placeholder={PLACEHOLDER_FIRST_NAME}
              width="100%"
              id={0}
              errorMessage={firstNameErrorMessage}
              value={firstName}
              onChange={handleChange}
            />
            <Input
              isMobile={false}
              type="text"
              label={LABEL_LAST_NAME}
              placeholder={PLACEHOLDER_LAST_NAME}
              width="100%"
              id={1}
              errorMessage={lastNameErrorMessage}
              value={lastName}
              onChange={handleChange}
            />
            <Input
              isMobile={false}
              type="text"
              label={LABEL_AGE}
              placeholder={PLACEHOLDER_AGE}
              width="100%"
              id={2}
              errorMessage={ageErrorMessage}
              value={age}
              onChange={handleChange}
            />
          </Card>
          <Card>
            <Input
              isMobile={false}
              type="text"
              label={LABEL_MOBILE_NUMBER}
              placeholder={PLACEHOLDER_MOBILE_NUMBER}
              width="100%"
              id={3}
              errorMessage={mobileNumberErrorMessage}
              value={mobileNumber}
              onChange={handleChange}
            />
            <Input
              isMobile={false}
              type="text"
              label={LABEL_EMAIL}
              placeholder={PLACEHOLDER_EMAIL}
              width="100%"
              id={4}
              errorMessage={emailErrorMessage}
              value={email}
              onChange={handleChange}
            />
          </Card>
          <Card label={CARD_LABEL_PASSWORD}>
            <Input
              isMobile={false}
              type="password"
              label={LABEL_PASSWORD}
              width="100%"
              id={6}
              errorMessage={passwordErrorMessage}
              value={password}
              onChange={handleChange}
            />
            <Input
              isMobile={false}
              type="password"
              label={LABEL_CONFIRM_PASSWORD}
              width="100%"
              id={7}
              errorMessage={confirmPasswordErrorMessage}
              value={confirmPassword}
              onChange={handleChange}
            />
          </Card>
          <TextArea
            width="100%"
            isMobile={false}
            minHeight="75px"
            id={5}
            label={LABEL_DESCRIPTION}
            errorMessage={descriptionErrorMessage}
            value={description}
            onChange={handleChange}
          />
          <Buttons>
            <ButtonReset onClick={handleReset}>RESET</ButtonReset>
            <ButtonSubmit onClick={handleSubmit}>SUMBIT</ButtonSubmit>
          </Buttons>
          <Success>{success ? "Success" : ""}</Success>
        </InputContainer>
      </OuterContainer>
    </>
  );
};

export default Mobile;
