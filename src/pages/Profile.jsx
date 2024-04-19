import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaChevronDown } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 5rem;
`;
const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
`;
const Dropdown = styled.div`
  width: 70%;
  color: #66666699;
  position: relative;
`;
const DropdownBtn = styled.div`
  border: 1px solid #66666659;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const InfoBoxes = styled.div`
  background-color: #fde8ee80;
  border-radius: 15px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FormText = styled.div`
  font-size: 26px;
  font-weight: 500;
`;
const InfoBox = styled.div``;
const Name = styled.div`
  padding-bottom: 5px;
  color: #66666699;
  font-size: 12px;
`;
const NameField = styled.div`
  width: 70%;
  height: 3rem;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
`;
const Field = styled.input`
  width: 97%;
  height: 100%;
  padding: 0px 10px;
  background: transparent;
  border: none;
`;
const CurrencyField = styled.div``;

const ButtonSection = styled.div`
  display: flex;
  width: 40%;
`;
const Button = styled.div`
  width: 40%;
  border-radius: 40px;
  color: white;
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px #ee1d521a;
  &:hover {
    background: transparent;
    background: linear-gradient(to right, #ee1d52e3, #002a5ce3);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: all 0.5s ease-in-out;
  }
`;

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const nameStyle = {
    textAlign: "right",
  };
  const handelDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <Navbar />
      <Section>
        <TextArea>
          <Title>Profile</Title>
        </TextArea>
        <Form>
          <InfoBoxes>
            <FormText>Recipient Information</FormText>
            <InfoBox>
              <Name>Name</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="thomas@gmail.com"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Thomas Charles"
                ></Field>
              </NameField>
            </InfoBox>
            <Dropdown>
              <DropdownBtn onClick={handelDropdown}>
                Country <Icon />
              </DropdownBtn>
              {isActive && (
                <DropdownContent>
                  <DropdownItem>Hello</DropdownItem>
                  <DropdownItem>Hello</DropdownItem>
                </DropdownContent>
              )}
            </Dropdown>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Change Your Password</FormText>
            <InfoBox>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Current Password"
                ></Field>
                <Name style={nameStyle}>
                  we need your current password to confirm your changes
                </Name>
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="New Password"
                ></Field>
              </NameField>
            </InfoBox>
            <Dropdown>
              <DropdownBtn onClick={handelDropdown}>
                Repeat New Password <Icon />
              </DropdownBtn>
              {isActive && (
                <DropdownContent>
                  <DropdownItem>Hello</DropdownItem>
                  <DropdownItem>Hello</DropdownItem>
                </DropdownContent>
              )}
            </Dropdown>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Payout Details</FormText>

            <InfoBox>
              <InfoBox>
                <Dropdown>
                  <DropdownBtn onClick={handelDropdown}>
                    Select your payout method <Icon />
                  </DropdownBtn>
                  {isActive && (
                    <DropdownContent>
                      <DropdownItem>Hello</DropdownItem>
                      <DropdownItem>Hello</DropdownItem>
                    </DropdownContent>
                  )}
                </Dropdown>
                <Name>
                  Before we can pay you, we must have your Payment Information.
                  Be sure that are properly submitted.
                </Name>
              </InfoBox>
              <CurrencyField>
                <Field></Field>
              </CurrencyField>
            </InfoBox>
            <InfoBox>
              <Name>You can receive earnings in personal bank account</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Bank Account Details"
                ></Field>
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <ButtonSection>
            <Button>Save Changes</Button>
          </ButtonSection>
        </Form>
      </Section>
    </Container>
  );
};

export default Profile;
