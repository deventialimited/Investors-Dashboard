import React from "react";
import { SummaryData } from "../data";
import styled from "styled-components";
import { mobile } from "../responsive";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
`;
const Text = styled.div`
  margin-bottom: 2rem;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "15px" })}
`;
const InfoArea = styled.div`
  width: 90%;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #666666;
  font-size: 15px;
  ${mobile({ fontSize: "10px" })}
`;
const Underline = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  height: 2px;
`;
const Title = styled.div``;
const Amount = styled.div``;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Summary = ({ data }) => {
  const SummaryData = [
    { id: 1, title: "Total Referrals:", amount: data?.totalReferrals || "50" },
    { id: 2, title: "Total Earnings:", amount: data?.totalEarning || "$1000" },
    { id: 3, title: "UnVerified Referrals:", amount: "0" },
    { id: 4, title: "Clicks:", amount: "0" },
    { id: 5, title: "Conversion:", amount: "0" },
  ];

  return (
    <Section>
      <Text>Summary for This Month</Text>
      {SummaryData.map((item) => (
        <InfoArea key={item.id}>
          <Info>
            <Title>{item.title}</Title>
            <Amount>{item.amount}</Amount>
          </Info>
          <Underline></Underline>
        </InfoArea>
      ))}
    </Section>
  );
};

export default Summary;
