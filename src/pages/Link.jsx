import React from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 5rem;
`;
const Section = styled.div`
  background-image: linear-gradient(to right, #ee1d52, #9f2155, #002a5c);
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const BarInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bar = styled.div`
  font-weight: 500;
  font-size: 22px;
`;
const Icon = styled(IoMdCloseCircleOutline)`
  height: 35px;
  width: 35px;
`;
const InfoSections = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const InfoArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Infos = styled.div``;
const InfoName = styled.div`
  padding-bottom: 10px;
`;
const InfoInput = styled.div`
  width: 90%;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
  height: 49px;
`;
const Input = styled.input`
  border: none;
  background: transparent;
`;

const Text = styled.div`
  font-size: 14px;
  color: #66666699;
`;
const Button = styled.a`
  width: 50%;
  text-align: center;
  padding: 10px;
  color: white;
  text-decoration: none;
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  border-radius: 27px;
`;
const EndText = styled.div`
  font-size: 14px;
  color: black;
`;
const InfoField = styled.div`
  display: flex;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 14px 20px;
  width: 86%;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
const InfoLink = styled.div``;
const InfoSection = styled.div`
  display: flex;
  gap: 2rem;
  color: #ee1d52;
`;
const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
`;
const Info = styled.div``;
const CopyIcon = styled(IoCopyOutline)`
  width: 24px;
  height: 24px;
`;
const ShareIcon = styled(IoShareSocialOutline)`
  width: 24px;
  height: 24px;
`;
const AddIcon = styled(IoMdAddCircleOutline)`
  width: 24px;
  height: 24px;
`;
const Link = () => {
  return (
    <Container>
      <Section>
        <BarInfo>
          <Bar>Generate Referral Link</Bar>
          <Icon />
        </BarInfo>
      </Section>
      <InfoSections>
        <InfoArea>
          <Infos>
            <InfoName>Compaign</InfoName>
            <InfoInput>
              <Input></Input>
            </InfoInput>
          </Infos>
          <Infos>
            <InfoName>Friendly Links</InfoName>
            <InfoInput>
              <Input></Input>
            </InfoInput>
          </Infos>
          <Infos>
            <InfoName>Specific Website page</InfoName>
            <InfoInput>
              <Input></Input>
            </InfoInput>
          </Infos>
          <Text>
            Enter any URL from this website in the form above to generate a
            referral link!
          </Text>
          <Button href="/">Generate</Button>
          <EndText>Generated Referral Link</EndText>
          <InfoField>
            <InfoLink>https://azgoph.net/?ref=iqra_45</InfoLink>
            <InfoSection>
              <InfoIcon>
                <Info>Copy</Info>
                <CopyIcon />
              </InfoIcon>
              <InfoIcon>
                <Info>Share</Info>
                <ShareIcon />
              </InfoIcon>
              <InfoIcon>
                <Info>Add to List</Info>
                <AddIcon />
              </InfoIcon>
            </InfoSection>
          </InfoField>
        </InfoArea>
      </InfoSections>
    </Container>
  );
};

export default Link;
