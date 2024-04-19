import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import UploadImage from "../assets/uploadimage.png";
import { mobile } from "../responsive";

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
  ${mobile({ width: "80%" })}
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  ${mobile({ fontSize: "25px" })}
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
  ${mobile({ padding: "10px 10px", borderRadius: "8px", fontSize: "10px" })}
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
  ${mobile({ padding: "5px 15px" })}
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
  ${mobile({ fontSize: "16px" })}
`;
const InfoBox = styled.div``;
const Name = styled.div`
  padding-bottom: 5px;
  font-size: 16px;
`;
const NameField = styled.div`
  width: 80%;
  height: 3rem;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
  ${mobile({ height: "2rem", borderRadius: "8px" })}
`;
const Field = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  align-items: center;
  padding: 0px 15px;
  background: transparent;
  ${mobile({ width: "90%", fontSize: "10px" })}
`;

const ButtonSection = styled.div`
  display: flex;
  width: 35%;
  gap: 1rem;
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
const Image = styled.img`
  width: 20%;
  margin-top: 2rem;
`;
const CashIn = () => {
  const [isActive, setIsActive] = useState(false);

  const handelDropdown = () => {
    setIsActive(!isActive);
  };
  const inlineStyling = {
    background: "transparent",
    border: "1px solid #EE1D52",
    color: "#EE1D52",
  };
  return (
    <Container>
      <Navbar />
      <Section>
        <TextArea>
          <Title>Cash-In</Title>
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
                  placeholder="Thomas Charles"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Account Number</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="879823738973"
                ></Field>
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Sender Information</FormText>
            <InfoBox>
              <Name>Name</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Enter name"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Reference Number</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Enter Reference number"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Select Currency</Name>
              <InfoBox>
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
              </InfoBox>
            </InfoBox>
            <InfoBox>
              <Name>I will Pay</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Enter amount"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>I will Receive ($)</Name>
              <NameField>
                <Field
                  type="text"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="Enter amount"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Upload Reciept</Name>
              <NameField>
                <Field
                  type="file"
                  name="text"
                  required
                  autoComplete="off"
                  placeholder="No File Chosen"
                ></Field>
              </NameField>
              <Image src={UploadImage} />
            </InfoBox>
          </InfoBoxes>
          <ButtonSection>
            <Button style={inlineStyling}>Clear</Button>
            <Button>Submit</Button>
          </ButtonSection>
        </Form>
      </Section>
    </Container>
  );
};

export default CashIn;
