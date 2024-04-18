import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import BarSection from "../components/BarSection";
import ChartSection from "../components/ChartSection";
import Details from "../components/Details";
import UserActivity from "../components/UserActivity";
import TransactionHistory from "../components/TransactionHistory";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
`;
const Text = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  font-family: "Poppins", sans-serif;
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const Button = styled.div`
  border: 1px solid #ee1d52;
  border-radius: 15px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ee1d52;
  cursor: pointer;
  &:hover {
    background-color: #ee1d52;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;
const IconOne = styled(AiOutlineDollarCircle)`
  height: 25px;
  width: 25px;
`;
const IconTwo = styled(BsShop)`
  height: 25px;
  width: 25px;
`;
const Span = styled.span``;

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Section>
        <Header>
          <Text>Dashboard</Text>
          <ButtonArea>
            <Button>
              <IconOne></IconOne>
              <Span>Cash-In</Span>
            </Button>
            <Button>
              <IconTwo></IconTwo>
              <Span>Shop</Span>
            </Button>
          </ButtonArea>
        </Header>
        <BarSection />
        <ChartSection />
        <Details />
        <UserActivity />
        <TransactionHistory />
      </Section>
    </Container>
  );
};

export default Dashboard;
