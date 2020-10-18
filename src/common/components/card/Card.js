import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 0 1rem 1rem 1rem;
  border: solid 1px #9999994f;
  border-radius: 5px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  position: relative;
`;

const CardOuterContainer = styled.div`
  width: 100%;
`;

const Label = styled.div`
  position: absolute;
  top: -8px;
  left: 15px;
  background: #fff;
  padding: 0px 5px;
  font-size: 14px;
  font-family: Lato;
  font-weight: 400;
`;

const Card = (props) => {
  const { label, children } = props;
  return (
    <CardOuterContainer>
      <CardContainer>
        {label ? <Label>{label}</Label> : null}
        {children}
      </CardContainer>
    </CardOuterContainer>
  );
};

export default Card;
