import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { api } from "../axios/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../context/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { formatDate } from "date-fns";

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

  ${tablet({
    height: "500px",
    width: "70%",
    gap: "2rem",
  })}

  ${mobile({ height: "400px", width: "80%", gap: "1rem" })}
`;
const TitleSection = styled.div``;
const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #333333;
  ${tablet({ fontSize: "25px" })}

  ${mobile({ fontSize: "15px" })}
`;
const FieldSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: cetner;
  color: #757575;
  ${tablet({ width: "50%" })}
  ${mobile({ width: "65%" })}
`;
const Fields = styled.div`
  border: 1px solid #66666659;
  border-radius: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({ height: "35px", borderRadius: "8px" })}
  ${mobile({ height: "30px", borderRadius: "8px" })}
`;
const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;
  padding-left: 15px;
  background: transparent;
  ${tablet({ fontSize: "12px" })}
  ${mobile({ fontSize: "10px" })}
`;
const Dropdown = styled.div`
  width: 100%;
  color: #66666699;
`;
const DropdownBtn = styled.div`
  border: 1px solid #66666659;
  cursor: pointer;
  border-radius: 10px;
  background: transparent;
  width: 90%;
  font-size: 14px;
  display: flex;
  border: none;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
  ${tablet({
    width: "90%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "12px",
  })}
  ${mobile({
    width: "90%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "10px",
  })}
`;
const Icon = styled(FaChevronDown)``;

const DropdownContent = styled.div`
  position: absolute;
  width: ;
  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 5px 5px;
  margin-top: 0.5rem;
  ${tablet({
    width: "40%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "10px",
  })}
`;
const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
  ${mobile({ padding: "5px 15px" })}
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
  height: 40px;
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
  ${tablet({ width: "30%", fontSize: "14px" })}

  ${mobile({ width: "30%", height: "30px", fontSize: "10px" })}
`;

const register = () => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("passwords do not match!");
    }
    try {
      const { data } = await api.post("/signup", {
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        country: formData.country,
      });

      dispatch(setUser({ ...data.user, token: data.token }));

      toast.success(data.message || "");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData((prevData) => ({
      ...prevData,
      country: country,
    }));
    setIsActive(false);
  };

  return (
    <Container>
      <ToastContainer />
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
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            ></InputField>
          </Fields>
          <Fields>
            <InputField
              placeholder="Email address"
              required
              autoComplete="off"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Fields>
          <Fields>
            <InputField
              placeholder="Full name"
              required
              autoComplete="off"
              type="text"
              id="name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </Fields>

          <Fields>
            <InputField
              placeholder="Password"
              required
              autoComplete="off"
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Fields>

          <Fields>
            <InputField
              placeholder="Confirm password"
              required
              autoComplete="off"
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </Fields>

          <Fields>
            <Dropdown>
              <DropdownBtn onClick={() => setIsActive(!isActive)}>
                Select Country <Icon />
              </DropdownBtn>
              {isActive && (
                <DropdownContent>
                  <DropdownItem onClick={() => handleCountrySelect("USA")}>
                    USA
                  </DropdownItem>
                  <DropdownItem onClick={() => handleCountrySelect("UK")}>
                    UK
                  </DropdownItem>
                  <DropdownItem onClick={() => handleCountrySelect("Canada")}>
                    Canada
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleCountrySelect("Australia")}
                  >
                    Australia
                  </DropdownItem>
                  <DropdownItem onClick={() => handleCountrySelect("Germany")}>
                    Germany
                  </DropdownItem>
                </DropdownContent>
              )}
            </Dropdown>
          </Fields>
        </FieldSection>
        <Button onClick={handleSubmit}>Create</Button>
      </Section>
    </Container>
  );
};

export default register;
