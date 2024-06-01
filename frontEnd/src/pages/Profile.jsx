import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../context/userSlice";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";
import { MdVisibilityOff } from "react-icons/md";

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
  width: 82%;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 12px 5px;
  margin-top: 0.5rem;
  color: #66666699;
  ${tablet({ width: "80%" })}
  ${mobile({ fontSize: "10px" })}
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
  ${tablet({ fontSize: "11px" })}
  ${mobile({ fontSize: "9px" })}
`;

const NameField = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 12px;
  width: 80%;
  height: 3rem;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
  ${mobile({ height: "2rem", borderRadius: "8px" })}
`;

const FieldIcon = styled(MdVisibilityOff)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  ${mobile({ height: "15px", width: "15px" })}
`;

const Field = styled.input`
  width: 97%;
  height: 100%;
  font-size: 16px;
  padding: 0px 10px;
  background: transparent;
  color: #66666699;
  border: none;
  ${tablet({ width: "90%", fontSize: "13px" })}
  ${mobile({ width: "90%", fontSize: "10px" })}
`;

const ButtonSection = styled.div`
  display: flex;
  width: 40%;
`;

const Button = styled.button`
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
  border: none;
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
  const user = useSelector((state) => state.user); // Access user from state.user
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email || "",
    userName: user.userName || "",
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
    country: user.country || "",
    payoutMethod: user.payoutMethod || "",
    bankDetails: user.bankAccountDetails || "",
    bankName: user.bankName || "", // Added bankName field
    avatar: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.repeatNewPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);
    formDataObj.append("userName", formData.userName);
    formDataObj.append("country", formData.country);
    formDataObj.append("currentPassword", formData.currentPassword);
    formDataObj.append("newPassword", formData.newPassword);
    formDataObj.append("payoutMethod", formData.payoutMethod);
    formDataObj.append("bankDetails", formData.bankDetails);
    formDataObj.append("bankName", formData.bankName); // Append bankName to form data
    if (formData.avatar) {
      formDataObj.append("avatar", formData.avatar);
    }

    try {
      const response = await api.post("/update-user", formDataObj, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data;
      dispatch(setUser({ ...data.user, token: user.token })); // Update user state with new data
      toast.success(data.message || "Profile updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred during profile update.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      avatar: e.target.files[0],
    }));
  };

  return (
    <Container>
      <ToastContainer />
      <Navbar />
      <Section>
        <TextArea>
          <Title>Profile</Title>
        </TextArea>
        <Form onSubmit={handleSubmit}>
          <InfoBoxes>
            <FormText>Recipient Information</FormText>
            <InfoBox>
              <Name>Email</Name>
              <NameField>
                <Field
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="thomas@gmail.com"
                />
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Full Name</Name>
              <NameField>
                <Field
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Thomas Charles"
                />
              </NameField>
            </InfoBox>
            <DropdownContent
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <DropdownItem value="">Select Country</DropdownItem>
              <DropdownItem value="Philippines">Philippines</DropdownItem>
              <DropdownItem value="Japan">Japan</DropdownItem>
              <DropdownItem value="UAE">UAE</DropdownItem>
              <DropdownItem value="USA">USA</DropdownItem>
            </DropdownContent>
            <InfoBox>
              <Name>Upload Avatar</Name>
              <NameField>
                <Field
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                />
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <InfoBoxes>
            <FormText>Change Your Password</FormText>
            <InfoBox>
              <NameField>
                <Field
                  id="password"
                  type={showPass ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Current Password"
                />
                <FieldIcon onClick={() => setShowPass(!showPass)} />
              </NameField>
              <Name style={{ textAlign: "right", width: "80%" }}>
                We need your current password to confirm your changes
              </Name>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type={showPass ? "text" : "password"}
                  name="newPassword"
                  required
                  value={formData.newPassword}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="New Password"
                />
                <FieldIcon onClick={() => setShowPass(!showPass)} />
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type={showPass ? "text" : "password"}
                  name="repeatNewPassword"
                  required
                  value={formData.repeatNewPassword}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Repeat New Password"
                />
                <FieldIcon onClick={() => setShowPass(!showPass)} />
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
              <Name> Bank Name</Name>
              <NameField>
                <Field
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Bank Name"
                />
              </NameField>
            </InfoBox>
            <InfoBox>
              <NameField>
                <Field
                  type="text"
                  name="bankDetails"
                  value={formData.bankDetails}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Bank Account Number"
                />
              </NameField>
            </InfoBox>
          </InfoBoxes>
          <ButtonSection>
            <Button type="submit">Save Changes</Button>
          </ButtonSection>
        </Form>
      </Section>
    </Container>
  );
};

export default Profile;
