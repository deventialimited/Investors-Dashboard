import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { MdVisibilityOff } from "react-icons/md";

const Container = styled.div`
  background-image: linear-gradient(170deg, #ee1d52, #9f2155, #002a5c);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  background-color: white;
  box-shadow: 0px 4px 25px 0px #ee1d5233;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0rem;
  border-radius: 24px;
  @media (max-width: 400px) {
    height: 250px;
    width: 70%;
    gap: 1rem;
  }
`;
const TitleSection = styled.div``;
const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #333333;
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
const LinkSection = styled.div`
  border: 1px solid #0059c2;
  border-radius: 40px;
  padding: 10px 0px;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 400px) {
    width: 65%;
    font-size: 10px;
    padding: 5px 0px;
    gap: 5px;
  }
`;
const Icon = styled(FcGoogle)`
  height: 24px;
  width: 24px;
  @media (max-width: 400px) {
    height: 10px;
    width: 10px;
  }
`;

const Text = styled.div`
  color: #333333;
`;
const SectionTwo = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 400px) {
    width: 65%;
  }
`;
const Underline = styled.div`
  height: 1px;
  width: 40%;
  background-color: #66666640;
`;
const Or = styled.div`
  color: #666666;
  font-size: 20px;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  @media (max-width: 400px) {
    font-size: 9px;
    gap: 1rem;
  }
`;

const FieldSection = styled.div`
  width: 55%;
  @media only screen and(max-width: 380px) {
    width: 65%;
  }
`;
const Fields = styled.div`
  border: 1px solid #66666659;
  padding: 0px 15px;
  border-radius: 12px;
  height: 45px;
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    height: 30px;
  }
`;
const InputField = styled.input`
  width: 98%;
  height: 100%;
  border: none;
  background: transparent;
`;
const FieldIcon = styled(MdVisibilityOff)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  @media (max-width: 400px) {
    height: 15px;
    width: 15px;
  }
`;
const Message = styled.div`
  color: #ee1d52;
  font-size: 14px;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
  color: white;
  width: 50%;
  height: 45px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px #ee1d521a;
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  cursor: pointer;
  &:hover {
    background: transparent;
    background: linear-gradient(to right, #ee1d52e3, #002a5ce3);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 400px) {
    width: 30%;
    height: 45px;

    font-size: 10px;
  }
`;
const AccountText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 400px) {
    font-size: 10px;
    width: 40%;
    font-size: 10px;
    gap: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
const Account = styled.div`
  color: #333333;
`;
const Signup = styled.a`
  color: #0059c2;
`;
const login = () => {
  return (
    <Container>
      <Section>
        <TitleSection>
          <Title>Login</Title>
        </TitleSection>
        <LinkSection>
          <Icon></Icon>
          <Text>Continue with Google</Text>
        </LinkSection>
        <SectionTwo>
          <Underline></Underline>
          <Or>OR</Or>
          <Underline></Underline>
        </SectionTwo>
        <FieldContainer>
          <FieldSection>
            <Fields>
              <InputField
                placeholder="Enter your email address"
                required
                autoComplete="off"
                type="text"
                id="email"
              />
            </Fields>
          </FieldSection>
          <FieldSection>
            <Fields>
              <InputField
                placeholder="Enter password"
                required
                autoComplete="off"
                type="text"
                id="password"
              />
              <FieldIcon />
            </Fields>
            <Message>Error message</Message>
          </FieldSection>
        </FieldContainer>
        <Button>Login</Button>
        <AccountText>
          <Account>Don’t have an account?</Account>
          <Signup href="/register">Sign up </Signup>
        </AccountText>
      </Section>
    </Container>
  );
};

export default login;
