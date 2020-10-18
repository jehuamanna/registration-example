import React, { useState } from "react";
import styled, { css } from "styled-components";
import EyeIconSrc from "../../assets/images/eye-icon.png";
import { useMediaQuery } from "beautiful-react-hooks";

const PaddingContainer = styled.div`
  width: ${(props) => props.width || "100%"};
`;

const InputImageContainer = styled.div`
  position: relative;
  padding: 8px;
  border: solid 1px ${(props) => (props.errorMessage ? "red" : "#9999998f")};
  border-radius: 5px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.isMobile &&
    css`
      border: none;
      border-bottom: solid 1px
        ${(props) => (props.errorMessage ? "red" : "#999999")};
      box-shadow: none;
      border-radius: 0px;
      padding: 0 5px 5px 5px;
    `}
`;

const InputArea = styled.input`
  border: none;
  outline: none;
  color: black;
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  width: 100%;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 15px;
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  padding: 0px 6px;
  color: red;
  ${(props) =>
    props.isMobile &&
    css`
      padding: 15px 6px 0px 6px;
    `}
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 15%;
  left: calc(100% - 25px);
`;

const Label = styled.div`
  font-size: 12px;
  padding: 3px 0px 5px 0px;
  font-family: Lato;
  font-weight: 400;
`;

const Input = (props) => {
  const {
    value,
    onChange,
    type,
    errorMessage,
    label,
    placeholder,
    width,
    id,
  } = props;
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 767px)");

  const [isPasswordType, setIsPasswordType] = useState(type === "password");
  return (
    <PaddingContainer width={width}>
      {isMobile ? (
        <ErrorMessage isMobile={isMobile}>{errorMessage}</ErrorMessage>
      ) : null}
      {!isMobile ? <Label>{label}</Label> : null}
      <InputImageContainer isMobile={isMobile} errorMessage={errorMessage}>
        <InputArea
          type={isPasswordType ? "password" : "text"}
          placeholder={isMobile ? label : placeholder}
          onChange={(e) => onChange(e)}
          value={value}
          id={id}
        />
        {type === "password" ? (
          <ImageContainer
            onClick={() => setIsPasswordType((prevType) => !prevType)}
          >
            <img
              src={EyeIconSrc}
              alt="show-hide-password"
              width="20px"
              height="20px"
            />
          </ImageContainer>
        ) : null}
      </InputImageContainer>
      {!isMobile ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </PaddingContainer>
  );
};

export default Input;
