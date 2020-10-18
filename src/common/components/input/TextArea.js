import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "beautiful-react-hooks";

const PaddingContainer = styled.div`
  width: ${(props) => props.width || "100%"};
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border: solid 1px #9999994f;
  border-radius: 5px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  min-height: ${(props) => props.minHeight || "75px"};
  color: black;
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
`;

const Label = styled.div`
  font-size: 12px;
  padding: 3px 0px 7px 0px;
  font-family: Lato;
  font-weight: 400;
  ${(props) =>
    props.isMobile &&
    css`
      font-size: 14px;
      font-family: Lato;
      font-weight: 400;
      margin-top: 1rem;
    `}
`;

const ErrorMessage = styled.div`
  width: 60%;
  height: ${(props) => (props.errorMessage ? "25px" : 0)};
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  padding: 6px;
  color: red;
`;

const NoticeArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Notice = styled.div`
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  color: #999999;
`;

const TextArea = (props) => {
  const { value, onChange, errorMessage, label, width, id } = props;
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 767px)");
  return (
    <PaddingContainer width={width}>
      <Label isMobile={isMobile}>{label}</Label>
      <TextAreaInput
        value={value}
        id={id}
        onChange={(e) => onChange(e)}
      ></TextAreaInput>
      <NoticeArea>
        <ErrorMessage errorMessage={errorMessage}>{errorMessage}</ErrorMessage>
        <Notice>Max. 150 characters</Notice>
      </NoticeArea>
    </PaddingContainer>
  );
};

export default TextArea;
