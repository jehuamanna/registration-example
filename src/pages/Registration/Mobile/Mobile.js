import React from "react";
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

  CREATE_ACCOUNT_TITLE,

  RESET,
  SUMBIT,
} = stringConstants;

const Mobile = (props) => {
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
    isMobile,
  } = props;

  return (
    <>
      <OuterContainer>
        <img src={MobileBannerImage} width="100%" height="100%" alt="banner" />
        <CreateAccount>{CREATE_ACCOUNT_TITLE}</CreateAccount>
        <InputContainer>
          <Card label={CARD_LABEL_PERSONAL_DETAILS}>
            <Input
              isMobile={isMobile}
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
              isMobile={isMobile}
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
              isMobile={isMobile}
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
              isMobile={isMobile}
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
              isMobile={isMobile}
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
              isMobile={isMobile}
              type="password"
              label={LABEL_PASSWORD}
              width="100%"
              id={6}
              errorMessage={passwordErrorMessage}
              value={password}
              onChange={handleChange}
            />
            <Input
              isMobile={isMobile}
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
            isMobile={isMobile}
            minHeight="75px"
            id={5}
            label={LABEL_DESCRIPTION}
            errorMessage={descriptionErrorMessage}
            value={description}
            onChange={handleChange}
          />
          <Buttons>
            <ButtonReset onClick={handleReset}>{RESET}</ButtonReset>
            <ButtonSubmit onClick={handleSubmit}>{SUMBIT}</ButtonSubmit>
          </Buttons>
          <Success>{success ? "Success" : ""}</Success>
        </InputContainer>
      </OuterContainer>
    </>
  );
};

export default Mobile;
