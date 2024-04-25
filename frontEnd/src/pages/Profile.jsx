import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { useSelector } from "react-redux";
import { api } from "../axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  ${mobile({ fontSize: "25px" })}
`;

const DropdownContent = styled.select`
  width: 80%;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 12px 5px;
  margin-top: 0.5rem;
  ${tablet({ width: "50%" })}
`;
const DropdownItem = styled.option`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
  ${tablet({ fontSize: "13px" })}

  ${mobile({ padding: "5px 15px", fontSize: "10px" })}
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
  color: #66666699;
  font-size: 12px;
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
  width: 97%;
  height: 100%;
  font-size: 16px;
  padding: 0px 10px;
  background: transparent;
  border: none;
  ${tablet({ width: "90%", fontSize: "13px" })}

  ${mobile({ width: "90%", fontSize: "10px" })}
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
  font-size: 17px;
  font-weight: 500;
  &:hover {
    background: transparent;
    background: linear-gradient(to right, #ee1d52e3, #002a5ce3);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: all 0.5s ease-in-out;
  }
  ${tablet({
    padding: "12px 10px",
    borderRadius: "20px",
    width: "50%",
    fontSize: "14px",
    fontWeight: "400",
  })}
  @media screen and (max-width: 580px) {
    font-size: 12px;
    width: 70%;
  }
  ${mobile({
    padding: "7px",
    borderRadius: "15px",
    width: "70%",
    fontSize: "8px",
  })}
`;

const Profile = () => {
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: user.email || "",
    fullName: user.fullName || "",
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
    country: user.country || "",
    payoutMethod: user.payoutMethod || "",
    bankDetails: user.bankAccountDetails || "",
  });

  const handleSubmit = async () => {
    if (formData.newPassword !== formData.repeatNewPassword) {
      toast.error("passwords do not match");
      return;
    }

    try {
      const res = await api.post(
        "/update-user",
        {
          email: formData.email,
          fullName: formData.fullName,
          country: formData.country,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          payoutMethod: formData.payoutMethod,
          bankDetails: formData.bankDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("response from update profile: ", res);
      toast.success("profile updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <Container>
      <ToastContainer />
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="thomas@gmail.com"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Thomas Charles"
                ></Field>
              </NameField>
            </InfoBox>
            <DropdownContent
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <DropdownItem value="">Select Country</DropdownItem>
              <DropdownItem value="USA">USA</DropdownItem>
              <DropdownItem value="UK">UK</DropdownItem>
              <DropdownItem value="Canada">Canada</DropdownItem>
              <DropdownItem value="Australia">Australia</DropdownItem>
            </DropdownContent>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Change Your Password</FormText>
            <InfoBox>
              <NameField>
                <Field
                  type="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Current Password"
                ></Field>
                <Name style={{ textAlign: "right" }}>
                  we need your current password to confirm your changes
                </Name>
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="password"
                  name="newPassword"
                  required
                  value={formData.newPassword}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="New Password"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="password"
                  name="repeatNewPassword"
                  required
                  value={formData.repeatNewPassword}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="New Password"
                ></Field>
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Payout Details</FormText>
            <DropdownContent
              name="payoutMethod"
              value={formData.payoutMethod}
              onChange={handleChange}
            >
              <DropdownItem value="">Select Payout Method</DropdownItem>
              <DropdownItem value="PayPal">PayPal</DropdownItem>
              <DropdownItem value="Bank Transfer">Bank Transfer</DropdownItem>
            </DropdownContent>
            <InfoBox>
              <Name>You can receive earnings in personal bank account</Name>
              <NameField>
                <Field
                  type="bankDetails"
                  name="bankDetails"
                  value={formData.bankDetails}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Bank Account Details"
                ></Field>
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <ButtonSection>
            <Button onClick={handleSubmit}>Save Changes</Button>
          </ButtonSection>
        </Form>
      </Section>
    </Container>
  );
};

export default Profile;
