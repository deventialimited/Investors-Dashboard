import React from "react";
import styled from "styled-components";
import { SectionData } from "../data";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Section = styled.div`
  box-shadow: 0px 8px 17px 1px #002a5c33;
  padding: 5px;
  width: calc(20%);
  height: 144px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  width: 80%;
  color: white;
`;
const Amount = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const Text = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
`;

const BarSection = () => {
  return (
    <Container>
      {SectionData.map((item) => (
        <Section key={item.id} style={{ backgroundColor: item.color }}>
          <Info>
            <Amount>{item.amount}</Amount>
            <Text>{item.title}</Text>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default BarSection;
