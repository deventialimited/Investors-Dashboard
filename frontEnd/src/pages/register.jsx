import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

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
const FieldSection = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  color: #757575;
  ${tablet({ width: "50%" })}
  ${mobile({ width: "65%" })}
`;
const Fields = styled.div`
  border: 1px solid #66666659;
  width: 60%;
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
const Dropdown = styled(ReactFlagsSelect)`
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
`;

const Button = styled.button`
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
  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px #ee1d521a;
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 1px solid #8f446b;

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
  const [user, setUser] = useState({
    userName: "",
    email: "",
    fullName: "",
    password: "",
    country: "",
    bankAccountDetails: "",
    payoutDetails: "",
  });
  const [selected, setSelected] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const responce = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (responce.ok) {
        setUser({
          email: "",
          password: "",
          userName: "",
          fullName: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Section>
        <TitleSection>
          <Title>Signup</Title>
        </TitleSection>
        <FieldSection onSubmit={handleSubmit}>
          <Fields>
            <InputField
              placeholder="Username"
              required
              autoComplete="off"
              type="text"
              id="username"
              name="userName"
              value={user.userName}
              onChange={handleInput}
            ></InputField>
          </Fields>
          <Fields>
            <InputField
              placeholder="Email address"
              required
              autoComplete="off"
              type="text"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInput}
            />
          </Fields>
          <Fields>
            <InputField
              placeholder="Full name"
              required
              autoComplete="off"
              type="text"
              name="fullName"
              id="name"
              value={user.fullName}
              onChange={handleInput}
            />
          </Fields>
          <Fields>
            <InputField
              placeholder="Password"
              required
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInput}
            />
          </Fields>
          <Fields>
            <InputField
              placeholder="Confirm password"
              required
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInput}
            />
          </Fields>
          <Fields>
            <Dropdown
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select Country"
              searchable
              searchplaceholder="Search Countries"
              name="country"
              value={user.country}
              onChange={handleInput}
            />
          </Fields>
          <Button type="submit">Create</Button>
        </FieldSection>
      </Section>
    </Container>
  );
};

export default register;
