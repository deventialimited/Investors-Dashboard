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
  margin-bottom: 5rem;
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
`;
const ReferenceSection = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: #e6eaef80;
  border-bottom: 1px solid #dbdbdb;
`;
const Title = styled.div`
  width: 80%;
  font-size: 14px;
  color: #002a5c;
  ${tablet({ fontSize: "13px", height: "35px" })}

  ${mobile({ fontSize: "10px", height: "24px" })}
`;
const DataSection = styled.div``;
const Bottom = styled.div`
  padding: 12px 30px;
  border-top: 1px solid #01365914;
  ${tablet({ height: "30px", padding: "10px 13px" })}
  ${mobile({ height: "24px", padding: "10px 13px" })}
`;
const Link = styled.div`
  font-size: 14px;
  width: 85%;
  color: #ee1d52;
  ${tablet({ fontSize: "11px", width: "100%" })}
  ${mobile({ fontSize: "9px" })}
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
          {TransactionData.map((item) => (
            <ReferenceSection key={item.id}>
              <TitleArea>
                <Title>{item.title}</Title>
              </TitleArea>

              <DataSection>
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
                <Bottom>
                  <Link>{item.dataFive}</Link>
                </Bottom>
              </DataSection>
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
