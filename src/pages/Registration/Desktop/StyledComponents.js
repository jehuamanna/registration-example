import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const AccountFormContainer = styled.div`
  width: 100%;
  padding: 2rem 4rem;
`;

export const CreateAccount = styled.div`
  font-size: 22px;
  font-family: Lato;
  font-weight: 700;
  color: #4c3e79;
  margin-bottom: 2rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Form = styled.div``;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0px 2rem 0px;
`;
export const ButtonReset = styled.div`
  border: solid 1px #4c3e79;
  color: #4c3e79;
  background-color: #fff;
  text-align: center;
  border-radius: 50px;
  padding: 10px 25px;
  font-size: 12px;
  cursor: pointer;
`;
export const ButtonSubmit = styled.div`
  border: solid 1px #4c3e79;
  color: #fff;
  background-color: #4c3e79;
  text-align: center;
  border-radius: 50px;
  padding: 10px 25px;
  font-size: 12px;
  margin-left: 2rem;
  cursor: pointer;
`;
export const Success = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: green;
  margin-bottom: 2rem;
`;
