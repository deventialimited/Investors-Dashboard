import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import UploadImage from "../assets/uploadimage.png";
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
  width: 80%;
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
  ${mobile({ width: "95%" })}
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
  ${mobile({ fontSize: "12px" })}
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
  display: flex;
  flex-direction: column;
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
  ${mobile({
    padding: "5px 15px",
    borderRadius: "20px",
    width: "40%",
    fontSize: "10px",
    fontWeight: "400",
  })}
  ${tablet({
    padding: "7px 15px",
    borderRadius: "20px",
    width: "40%",
    fontSize: "12px",
    fontWeight: "400",
  })}
`;
const Image = styled.img`
  width: 20%;
  margin-top: 2rem;
`;
const CashIn = () => {
  const [isActive, setIsActive] = useState(false);
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    receiptName: "",
    accountNo: "",
    senderName: "",
    referenceNo: "",
    currency: "",
    iWillPayAmount: "",
    commission: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("receiptName", formData.receiptName);
    formDataToSubmit.append("accountNo", formData.accountNo);
    formDataToSubmit.append("senderName", formData.senderName);
    formDataToSubmit.append("referenceNo", formData.referenceNo);
    formDataToSubmit.append("currency", formData.currency);
    formDataToSubmit.append("iWillPayAmount", formData.iWillPayAmount);
    formDataToSubmit.append("commission", formData.commission);
    formDataToSubmit.append("receipt", selectedFile);

    try {
      const { data } = await api.post(
        "/receipt/create-receipt",
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("receipt created successfully");

      setFormData({
        receiptName: "",
        accountNo: "",
        senderName: "",
        referenceNo: "",
        currency: "",
        iWillPayAmount: "",
        commission: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

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
      <ToastContainer />
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
                  name="receiptName"
                  value={formData.receiptName}
                  onChange={handleInputChange}
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
                  name="accountNo"
                  required
                  value={formData.accountNo}
                  onChange={handleInputChange}
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
                  name="senderName"
                  required
                  value={formData.senderName}
                  onChange={handleInputChange}
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
                  name="referenceNo"
                  value={formData.referenceNo}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  placeholder="Enter Reference number"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Select Currency</Name>
              <NameField>
                <Field
                  type="text"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  placeholder="Enter Reference number"
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>I will Pay</Name>
              <NameField>
                <Field
                  type="text"
                  name="iWillPayAmount"
                  value={formData.iWillPayAmount}
                  onChange={handleInputChange}
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
                  name="commission"
                  value={formData.commission}
                  onChange={handleInputChange}
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
                  name="receipt"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  required
                  autoComplete="off"
                  placeholder="No File Chosen"
                ></Field>
              </NameField>
              <Image
                src={
                  selectedFile ? URL.createObjectURL(selectedFile) : UploadImage
                }
              />
            </InfoBox>
          </InfoBoxes>
          <ButtonSection>
            <Button style={inlineStyling}>Clear</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </ButtonSection>
        </Form>
      </Section>
    </Container>
  );
};

export default CashIn;
