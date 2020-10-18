import React from "react";
import Input from "../../../common/components/input/Input";
import TextArea from "../../../common/components/input/TextArea";
import WebBannerImage from "../../../common/assets/images/web-banner.png";
import stringConstants from "../../../common/constants/stringConstants";
import {
  OuterContainer,
  AccountFormContainer,
  CreateAccount,
  Form,
  Inputs,
  Buttons,
  ButtonSubmit,
  ButtonReset,
  Success,
} from "./StyledComponents";

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
} = stringConstants;

const Desktop = (props) => {
  const {
    firstName,
    firstNameErrorMessage,
    lastName,
    lastNameErrorMessage,
    age,
    ageErrorMessage,
    mobileNumber,
    mobileNumberErrorMessage,
    email,
    emailErrorMessage,
    description,
    descriptionErrorMessage,
    password,
    passwordErrorMessage,
    confirmPassword,
    confirmPasswordErrorMessage,
    handleChange,
    handleReset,
    handleSubmit,
    success,
  } = props;

  return (
    <>
      <OuterContainer>
        <img src={WebBannerImage} width="40%" height="100%" alt="banner" />

        <AccountFormContainer>
          <CreateAccount>Create an account</CreateAccount>
          <Form onSubmit={() => null}>
            <Inputs>
              <Input
                isMobile={false}
                type="text"
                label={LABEL_FIRST_NAME}
                placeholder={PLACEHOLDER_FIRST_NAME}
                width="39%"
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
                width="39%"
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
                width="16%"
                id={2}
                errorMessage={ageErrorMessage}
                value={age}
                onChange={handleChange}
              />
              <Input
                isMobile={false}
                type="text"
                label={LABEL_MOBILE_NUMBER}
                placeholder={PLACEHOLDER_MOBILE_NUMBER}
                width="48%"
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
                width="48%"
                id={4}
                errorMessage={emailErrorMessage}
                value={email}
                onChange={handleChange}
              />
              <TextArea
                width="100%"
                isMobile={false}
                minHeight="75px"
                label={LABEL_DESCRIPTION}
                id={5}
                errorMessage={descriptionErrorMessage}
                value={description}
                onChange={handleChange}
              />
              <Input
                isMobile={false}
                type="password"
                label={LABEL_PASSWORD}
                width="48%"
                id={6}
                errorMessage={passwordErrorMessage}
                value={password}
                onChange={handleChange}
              />
              <Input
                isMobile={false}
                type="password"
                label={LABEL_CONFIRM_PASSWORD}
                width="48%"
                id={7}
                errorMessage={confirmPasswordErrorMessage}
                value={confirmPassword}
                onChange={handleChange}
              />
            </Inputs>
            <Buttons>
              <ButtonReset onClick={handleReset}>RESET</ButtonReset>
              <ButtonSubmit onClick={handleSubmit}>SUMBIT</ButtonSubmit>
            </Buttons>
            <Success>{success ? "Success" : ""}</Success>
          </Form>
        </AccountFormContainer>
      </OuterContainer>
    </>
  );
};

export default Desktop;
