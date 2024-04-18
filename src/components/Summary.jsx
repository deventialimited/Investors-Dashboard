import React from "react";
import { SummaryData } from "../data";
import styled from "styled-components";

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
`;
const InfoArea = styled.div`
  width: 90%;
  gap: 0.5rem;

  margin-bottom: 1rem;
  color: #666666;
  font-size: 15px;
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

const Summary = () => {
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
