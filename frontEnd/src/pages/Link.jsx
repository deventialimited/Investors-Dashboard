import React, { useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { FaChevronDown } from "react-icons/fa";
import { api } from "../axios/axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
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
  margin-top: 5rem;
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
  ${mobile({ width: "70%", gap: "1rem" })}
`;
const Infos = styled.div``;
const InfoName = styled.div`
  padding-bottom: 10px;
  ${mobile({ fontSize: "10px" })}
`;
const InfoInput = styled.div`
  width: 90%;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
  height: 49px;
  ${mobile({ height: "35px" })}
`;
const Input = styled.input`
  border: none;
  background: transparent;
`;

const Text = styled.div`
  font-size: 14px;
  color: #66666699;
  ${tablet({ fontSize: "10px" })}
`;
const Button = styled.a`
  width: 30%;
  text-align: center;
  padding: 10px;
  font-size: 15.04px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  border-radius: 27px;
  ${tablet({ borderRadius: "20px", fontSize: "12px" })}
  ${mobile({ fontSize: "10px" })}
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
  ${mobile({ fontSize: "9px", padding: "10px 10px" })}
`;
const InfoLink = styled.div`
  ${mobile({ width: "70%" })}
`;
const InfoSection = styled.div`
  display: flex;
  gap: 2rem;
  color: #ee1d52;
  ${mobile({ gap: "0.5rem" })}
`;
const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;

  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
  ${mobile({ fontSize: "10px", gap: "2px" })}
`;
const Info = styled.div`
  ${tablet({ display: "none" })}
  ${mobile({ display: "none" })}
`;
const CopyIcon = styled(IoCopyOutline)`
  width: 24px;
  height: 24px;
  ${mobile({ width: "12px", height: "12px" })}
`;
const ShareIcon = styled(IoShareSocialOutline)`
  width: 24px;
  height: 24px;
  ${mobile({ width: "12px", height: "12px" })}
`;
const AddIcon = styled(IoMdAddCircleOutline)`
  width: 24px;
  height: 24px;
  ${mobile({ width: "12px", height: "12px" })}
`;
const Dropdown = styled.div`
  width: 100%;
  color: #66666699;
  position: relative;
`;
const DropdownBtn = styled.div`
  border: 1px solid #66666659;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  ${mobile({ padding: "10px 10px", borderRadius: "8px", fontSize: "10px" })}
`;
const IconDown = styled(FaChevronDown)``;

const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 5px 5px;

  margin-top: 0.5rem;
`;
const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
  ${mobile({ padding: "5px 15px" })}
`;
const Link = () => {
  const [isActive, setIsActive] = useState(false);
  const handelDropdown = () => {
    setIsActive(!isActive);
  };

  const [referLink, setReferLink] = useState();

  const user = useSelector((state) => state.user);

  const handleGenerateLink = async () => {
    try {
      const { data } = await api.post(
        "referral/generate-ref",
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setReferLink(data.referral);
      toast.success("link generated");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyLink = (referralLink) => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard");
  };

  return (
    <Container>
      <ToastContainer />
      <Section>
        <BarInfo>
          <Bar>Generate Referral Link</Bar>
          <Icon />
        </BarInfo>
      </Section>
      <InfoSections>
        <InfoArea>
          {/* <Infos>
            <InfoName>Compaign</InfoName>
            <InfoInput>
              <Dropdown>
                <DropdownBtn onClick={handelDropdown}>
                  Select <IconDown />
                </DropdownBtn>
                {isActive && (
                  <DropdownContent>
                    <DropdownItem>Hello</DropdownItem>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownContent>
                )}
              </Dropdown>
            </InfoInput>
          </Infos>
          <Infos>
            <InfoName>Friendly Links</InfoName>
            <InfoInput>
              <Dropdown>
                <DropdownBtn onClick={handelDropdown}>
                  Select <IconDown />
                </DropdownBtn>
                {isActive && (
                  <DropdownContent>
                    <DropdownItem>Hello</DropdownItem>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownContent>
                )}
              </Dropdown>
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
          </Text> */}
          <Button onClick={handleGenerateLink}>Generate</Button>
          <EndText>Generated Referral Link</EndText>
          <InfoField>
            <InfoLink>
              {referLink ? (
                referLink.referralLink
              ) : (
                <>Click generate to get a refer link</>
              )}
            </InfoLink>
            <InfoSection>
              <InfoIcon onClick={() => handleCopyLink(referLink.referralLink)}>
                <Info>Copy</Info>
                <CopyIcon />
              </InfoIcon>
              {/* <InfoIcon>
                <Info>Share</Info>
                <ShareIcon />
              </InfoIcon>
              <InfoIcon>
                <Info>Add to List</Info>
                <AddIcon />
              </InfoIcon> */}
            </InfoSection>
          </InfoField>
        </InfoArea>
      </InfoSections>
    </Container>
  );
};

export default Link;
