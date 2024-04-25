import React from "react";
import styled from "styled-components";
import { TransactionData } from "../data";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TopText = styled.div`
  font-size: 20px;
  font-weight: 500;
  ${tablet({ fontSize: "17px" })}
  ${mobile({ fontSize: "15px" })}
`;
const FormArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  border: 1px solid #e7e7e7;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ReferenceSection = styled.div`
  display: flex;
  flex-direction: row;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 10px 0px;
  border-radius: 25px 25px 0px 0px;
  background-color: #e6eaef80;
  border-bottom: 1px solid #dbdbdb;
  gap: 0rem;
`;
const Title = styled.a`
  width: 25%;
  font-size: 13px;
  display: grid;
  color: #002a5c;
  padding: 0px 15px;

  ${tablet({ fontSize: "13px", height: "35px" })}

  ${mobile({ fontSize: "10px", height: "24px" })}
`;

const Bottom = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: center;
  border-top: 1px solid #01365914;
  padding: 12px 15px;

  ${tablet({ height: "30px" })}
  ${mobile({ height: "24px", width: "100%" })}
`;
const Link = styled.div`
  width: 100%;
  font-size: 13px;

  color: ${({ status }) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Cancelled":
        return "red";
      case "Pending":
        return "orange";
      case "Active":
        return "darkpurple";
      default:
        return "#ee1d52";
    }
  }};
  @media (max-width: 1180px) {
    font-size: 12px;
  }
  ${tablet({
    fontSize: "11px",
    width: "100%",
    padding: "0px 5px",
  })}
  @media (max-width: 840px) {
    font-size: 9px;
  }
  ${mobile({ fontSize: "9px", width: "100%", padding: "0px 0px" })};
`;
const Pages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const ButtonSection = styled.div`
  color: #ee1d52;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LeftIcon = styled(MdKeyboardDoubleArrowLeft)`
  height: 17px;
  width: 17px;
  ${mobile({ height: "15px", width: "15px" })}
`;
const RightIcon = styled(MdKeyboardDoubleArrowRight)`
  height: 20px;
  width: 20px;
`;
const Text = styled.div`
  font-size: 12.52px;

  ${mobile({ display: "none" })}
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #e6e6e6;
  padding: 5px 15px;
  border-radius: 42px;
  ${mobile({ gap: "0.5rem", fontSize: "10px" })}
`;
const BoxOne = styled.a`
  color: #ee1d52;
  text-decoration: none;

  .active {
    background-color: #ee1d52;
    color: white;
  }
`;
const BoxTwo = styled.a`
  color: #ee1d52;
  text-decoration: none;

  .active {
    background-color: #ee1d52;
    color: white;
  }
`;
const BoxThree = styled.a`
  color: #ee1d52;
  text-decoration: none;

  .active {
    background-color: #ee1d52;
    color: white;
  }
`;
const BoxFour = styled.a`
  color: #ee1d52;
  text-decoration: none;

  .active {
    background-color: #ee1d52;
    color: white;
  }
`;

const TransactionHistory = () => {
  return (
    <Container>
      <TopText>Transaction History</TopText>
      <FormArea>
        <Section>
          <TitleArea>
            <Title>ID</Title>
            <Title>Date</Title>
            <Title>Amount</Title>
            <Title>Status</Title>
          </TitleArea>
          {TransactionData.map((item) => (
            <ReferenceSection key={item.id}>
              <Bottom>
                <Link>{item.dataOne}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.dataTwo}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.dataThree}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.dataFour}</Link>
              </Bottom>
            </ReferenceSection>
          ))}
        </Section>
      </FormArea>
      <Pages>
        <ButtonSection>
          <LeftIcon />
          <Text>Previous</Text>
        </ButtonSection>
        <Box>
          <BoxOne>1</BoxOne>
          <BoxTwo>2</BoxTwo>
          <BoxThree>3</BoxThree>
          <BoxFour>4</BoxFour>
        </Box>
        <ButtonSection>
          <Text>Next</Text> <RightIcon />
        </ButtonSection>
      </Pages>
    </Container>
  );
};

export default TransactionHistory;
