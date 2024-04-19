import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

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
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0rem;
  border-radius: 24px;
`;
const TitleSection = styled.div``;
const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #333333;
`;
const FieldSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: cetner;
  color: #757575;
`;
const Fields = styled.div`
  border: 1px solid #66666659;
  border-radius: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 15px;
  background: transparent;
`;
const Dropdown = styled.div`
  width: 100%;
  color: #66666699;
  position: relative;
`;
const DropdownBtn = styled.div`
  border: 1px solid #66666659;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled(FaChevronDown)``;

const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 5px 5px;

  margin-top: 0.5rem;
`;
const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
`;
const Button = styled.a`
  display: flex;
  text-decoration: none;
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
`;

const register = () => {
  const [isActive, setIsActive] = useState(false);
  const handelDropdown = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <Section>
        <TitleSection>
          <Title>Signup</Title>
        </TitleSection>
        <FieldSection>
          <Fields>
            <InputField
              placeholder="Username"
              required
              autoComplete="off"
              type="text"
              id="username"
            ></InputField>
          </Fields>
          <Fields>
            <InputField
              placeholder="Email address"
              required
              autoComplete="off"
              type="text"
              id="email"
            />
          </Fields>
          <Fields>
            <InputField
              placeholder="Full name"
              required
              autoComplete="off"
              type="text"
              id="name"
            />
          </Fields>

          <Fields>
            <InputField
              placeholder="Password"
              required
              autoComplete="off"
              type="text"
              id="password"
            />
          </Fields>

          <Fields>
            <InputField
              placeholder="Confirm password"
              required
              autoComplete="off"
              type="text"
              id="password"
            />
          </Fields>

          <Fields>
            <Dropdown>
              <DropdownBtn onClick={handelDropdown}>
                Select Method <Icon />
              </DropdownBtn>
              {isActive && (
                <DropdownContent>
                  <DropdownItem>Hello</DropdownItem>
                  <DropdownItem>Hello</DropdownItem>
                </DropdownContent>
              )}
            </Dropdown>
          </Fields>
        </FieldSection>
        <Button href="/">Create</Button>
      </Section>
    </Container>
  );
};

export default register;
