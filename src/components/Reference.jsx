import React from "react";
import styled from "styled-components";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

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
  gap: 1.5rem;
`;
const InfoArea = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
`;
const Button = styled.a`
  color: #ee1d52;
  border: 1px solid #ee1d52;
  padding: 8px 19px;
  border-radius: 15px;
  text-decoration: none;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ee1d52;
    color: white;
  }
`;
const Text = styled.div`
  width: 95%;
  font-size: 15px;
  font-weight: 500;
  color: #666666;
`;
const InfoPart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 95%;
`;
const InfoField = styled.div`
  display: flex;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 14px 20px;
  width: 80%;
  justify-content: space-between;
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
const DeleteIcon = styled(RiDeleteBin5Line)`
  width: 24px;
  height: 24px;
  color: #ee1d52;
`;

const Reference = () => {
  return (
    <Section>
      <InfoArea>
        <Title>Active Referral Links</Title>
        <Button href="/link">Generate Referral Link</Button>
      </InfoArea>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </Text>
      <InfoPart>
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
          </InfoSection>
        </InfoField>
        <DeleteIcon />
      </InfoPart>
      <InfoPart>
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
          </InfoSection>
        </InfoField>{" "}
        <DeleteIcon />
      </InfoPart>
      <InfoPart>
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
          </InfoSection>
        </InfoField>
        <DeleteIcon />
      </InfoPart>
    </Section>
  );
};

export default Reference;
