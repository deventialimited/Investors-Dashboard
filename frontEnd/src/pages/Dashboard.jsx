import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import BarSection from "../components/BarSection";
import ChartSection from "../components/ChartSection";
import Details from "../components/Details";
import UserActivity from "../components/UserActivity";
import TransactionHistory from "../components/TransactionHistory";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 5rem;
`;
const Section = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  gap: 5rem 0rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "1rem" })}
`;
const Text = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  font-family: "Poppins", sans-serif;
  ${mobile({ fontSize: "25px" })} ${tablet({ fontSize: "30px" })}
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const Button = styled.a`
  border: 1px solid #ee1d52;
  border-radius: 15px;
  text-decoration: none;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  color: #ee1d52;
  cursor: pointer;
  &:hover {
    background-color: #ee1d52;
    color: white;
    transition: all 0.3s ease-in-out;
  }
  ${mobile({
    padding: "5px 15px",
    borderRadius: "10px",
    gap: "3px",
    fontSize: "12px",
  })}
  ${tablet({
    borderRadius: "10px",
    padding: "5px 15px",
    gap: "3px",
    fontSize: "14px",
  })}
`;
const IconOne = styled(AiOutlineDollarCircle)`
  height: 25px;
  width: 25px;
  ${mobile({ height: "15px", width: "25px" })}
`;
const IconTwo = styled(BsShop)`
  height: 25px;
  width: 25px;
  ${mobile({ height: "15px", width: "25px" })}
`;
const Span = styled.span`
  ${mobile({ fontSize: "12px" })}
`;
const Dashboard = () => {
  const [data, setData] = useState();
  return (
    <Container>
      <Navbar />
      <Section>
        <Header>
          <Text>Dashboard</Text>
          <ButtonArea>
            <Button href="/cashin">
              <Span>Cash-In</Span>
            </Button>
            <Button>
              <IconTwo></IconTwo>
              <Span>Shop</Span>
            </Button>
          </ButtonArea>
        </Header>
        <BarSection setData={setData} />
        <ChartSection />
        <Details data={data} />
        <UserActivity />
        <TransactionHistory />
      </Section>
    </Container>
  );
};

export default Dashboard;
