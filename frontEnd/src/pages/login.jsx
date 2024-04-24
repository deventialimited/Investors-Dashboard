import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { MdVisibilityOff } from "react-icons/md";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../axios/axios";
import { setUser } from "../context/userSlice";
import { useNavigate } from "react-router-dom";

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
  ${tablet({ height: "450px", width: "70%", gap: "1rem" })}

  ${mobile({ height: "250px", width: "70%", gap: "1rem" })}
`;
const TitleSection = styled.div``;
const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #333333;

  ${mobile({ fontSize: "15px" })}
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
  ${tablet({ fontSize: "12px", width: "55%", padding: "5px 0px", gap: "5px" })}
  ${mobile({ fontSize: "10px", width: "65%", padding: "5px 0px", gap: "5px" })}
`;
const Icon = styled(FcGoogle)`
  height: 24px;
  width: 24px;
  ${mobile({ height: "18px", width: "18px" })}

  ${mobile({ height: "15px", width: "15px" })}
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
  ${mobile({ width: "65%" })}
`;
const Underline = styled.div`
  height: 1px;
  width: 40%;
  background-color: #66666640;
`;
const Or = styled.div`
  color: #666666;
  font-size: 20px;
  ${mobile({ fontSize: "10px" })}
`;
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  ${mobile({ fontSize: "15px", gap: "1rem" })}
`;

const FieldSection = styled.div`
  width: 55%;
  ${mobile({ width: "65%" })}
`;
const Fields = styled.div`
  border: 1px solid #66666659;
  padding: 0px 15px;
  border-radius: 12px;
  height: 45px;
  display: flex;
  align-items: center;
  ${mobile({ height: "30px", borderRadius: "8px" })}
`;
const InputField = styled.input`
  width: 98%;
  height: 100%;
  border: none;
  background: transparent;
  ${mobile({ fontSize: "10px" })}
`;
const FieldIcon = styled(MdVisibilityOff)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  ${mobile({ height: "15px", width: "15px" })}
`;
const Message = styled.div`
  color: #ee1d52;
  font-size: 14px;
  ${mobile({ fontSize: "10px" })}
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
  ${tablet({ width: "30%", height: "40px", fontSize: "14px" })}

  ${mobile({ width: "25%", height: "30px", fontSize: "10px" })}
`;
const AccountText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 15px;
  font-weight: 300;
  ${mobile({
    width: "40%",
    gap: "0px",
    fontSize: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  })}
`;
const Account = styled.div`
  color: #333333;
`;
const Signup = styled.a`
  color: #0059c2;
`;

const login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data } = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      dispatch(setUser({ ...data.user, token: data.token }));
      toast.success(data.message);
      navigate("/");
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                name="password"
                autoComplete="off"
                type={showPass ? `text` : `password`}
                id="password"
              />
              <FieldIcon onClick={() => setShowPass(!showPass)} />
            </Fields>
            {/* <Message>Error message</Message> */}
          </FieldSection>
        </FieldContainer>
        <Button onClick={handleSubmit}>Login</Button>
        <AccountText>
          <Account>Don’t have an account?</Account>
          <Signup href="/register">Sign up </Signup>
        </AccountText>
      </Section>
    </Container>
  );
};

export default login;
