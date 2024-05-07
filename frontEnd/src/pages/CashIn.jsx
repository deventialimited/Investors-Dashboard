import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import UploadImage from "../assets/uploadimage.png"
import { mobile } from "../responsive"
import { tablet } from "../responsive"
import { useSelector } from "react-redux"
import { api } from "../axios/axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`
const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${mobile({ width: "80%" })}
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`
const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  ${mobile({ fontSize: "25px" })}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const InfoBoxes = styled.div`
  background-color: #fde8ee80;
  border-radius: 15px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const FormText = styled.div`
  font-size: 26px;
  font-weight: 500;
  ${mobile({ fontSize: "16px" })}
`
const InfoBox = styled.div``
const Name = styled.div`
  padding-bottom: 5px;
  font-size: 16px;
  ${mobile({ fontSize: "12px" })}
`
const NameField = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
  ${mobile({ height: "2rem", borderRadius: "8px" })}
`
const DropdownContent = styled.select`
  width: 100%;
  height: 100%;
  color: #666666;
  border-radius: 10px;
  border: none;
  padding: 10px;
  background: transparent;
  ${tablet({ fontSize: "10px" })}

  ${mobile({ padding: "5px 15px", fontSize: "9px" })}
`
const DropdownItem = styled.option`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
`
const Field = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #66666699;
  padding: 0px 15px;
  background: transparent;
  ${mobile({ width: "90%", fontSize: "10px" })}
`

const ButtonSection = styled.div`
  display: flex;
  width: 35%;
  gap: 1rem;
`
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
`
const Image = styled.img`
  width: 20%;
  margin-top: 2rem;
`
const CashIn = () => {
  const user = useSelector((state) => state.user)

  const [formData, setFormData] = useState({
    receiptName: "",
    accountNo: "",
    senderName: "",
    referenceNo: "",
    currency: "",
    iWillPayAmount: "",
    commission: "",
  })
  const [selectedFile, setSelectedFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataToSubmit = new FormData()
    formDataToSubmit.append("receiptName", formData.receiptName)
    formDataToSubmit.append("accountNo", formData.accountNo)
    formDataToSubmit.append("senderName", formData.senderName)
    formDataToSubmit.append("referenceNo", formData.referenceNo)
    formDataToSubmit.append("currency", formData.currency)
    formDataToSubmit.append("iWillPayAmount", formData.iWillPayAmount)
    formDataToSubmit.append("commission", formData.commission)
    formDataToSubmit.append("receipt", selectedFile)

    try {
      const { data } = await api.post(
        "/receipt/create-receipt",
        formDataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      toast.success("receipt created successfully")

      setFormData({
        receiptName: "",
        accountNo: "",
        senderName: "",
        referenceNo: "",
        currency: "",
        iWillPayAmount: "",
        commission: "",
      })
      setSelectedFile(null)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const inlineStyling = {
    background: "transparent",
    border: "1px solid #EE1D52",
    color: "#EE1D52",
  }
  const inlineStyle = {
    width: "15%",
    height: "100%",
    color: "#666666",
    borderRadius: "10px 0px 0px 10px",
    border: "none",
    borderRight: "1px solid #c8c8c8",
    backgroundColor: "#f2f2f7",
  }
  return (
    <Container>
      <ToastContainer />
      <Navbar />
      <Section>
        <TextArea>
          <Title>Cash-In</Title>
          <NameField>
            <DropdownContent
              name='payoutMethod'
              value={formData.payoutMethod}
              onChange={handleInputChange}
            >
              <DropdownItem value=''>Select Method</DropdownItem>
              <DropdownItem value='PayPal'>PayPal</DropdownItem>
              <DropdownItem value='Bank Transfer'>Bank Transfer</DropdownItem>
            </DropdownContent>
          </NameField>
        </TextArea>
        <Form>
          <InfoBoxes>
            <FormText>Recipient Information</FormText>
            <InfoBox>
              <Name>Name</Name>
              <NameField>
                <Field
                  type='text'
                  name='receiptName'
                  value={formData.pay}
                  onChange={handleInputChange}
                  required
                  autoComplete='off'
                  placeholder='Thomas Charles'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Account Number</Name>
              <NameField>
                <Field
                  type='text'
                  name='accountNo'
                  required
                  value={formData.accountNo}
                  onChange={handleInputChange}
                  autoComplete='off'
                  placeholder='879823738973'
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
                  type='text'
                  name='senderName'
                  required
                  value={formData.senderName}
                  onChange={handleInputChange}
                  autoComplete='off'
                  placeholder='Enter name'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Reference Number</Name>
              <NameField>
                <Field
                  type='text'
                  name='referenceNo'
                  value={formData.referenceNo}
                  onChange={handleInputChange}
                  required
                  autoComplete='off'
                  placeholder='Enter Reference number'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Select Currency</Name>
              <NameField>
                <DropdownContent
                  name='country'
                  value={formData.payoutMethod}
                  onChange={handleInputChange}
                  style={inlineStyle}
                >
                  <DropdownItem onChange={handleInputChange} value='CAD'>
                    Canadian Dollar (C$)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='USD'>
                    US Dollar ($)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='AED'>
                    UAE Dirham (AED)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='PKR'>
                    Pakistani Rupee (PKR)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='INR'>
                    Indian Rupee (INR)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='EUR'>
                    Euro (€)
                  </DropdownItem>
                  <DropdownItem onChange={handleInputChange} value='PHP'>
                    Philippine Peso (₱)
                  </DropdownItem>
                </DropdownContent>

                <Field
                  type='text'
                  name='currency'
                  value={formData.currency}
                  onChange={handleInputChange}
                  required
                  autoComplete='off'
                  placeholder='1'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>I will Pay</Name>
              <NameField>
                <Field
                  type='text'
                  name='iWillPayAmount'
                  value={formData.iWillPayAmount}
                  onChange={handleInputChange}
                  required
                  autoComplete='off'
                  placeholder='Enter amount'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>I will Receive ($)</Name>
              <NameField>
                <Field
                  type='text'
                  name='commission'
                  value={formData.commission}
                  onChange={handleInputChange}
                  required
                  autoComplete='off'
                  placeholder='Enter amount'
                ></Field>
              </NameField>
            </InfoBox>
            <InfoBox>
              <Name>Upload Reciept</Name>
              <NameField>
                <Field
                  type='file'
                  name='receipt'
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  required
                  autoComplete='off'
                  placeholder='No File Chosen'
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
  )
}
export default CashIn
