import React from "react";
import styled from "styled-components";
import LeftLogo from "../assets/LeftLogo.png";
import RightLogo from "../assets/RightLogo.png";
import CenterLogo from "../assets/centerlogo.png";
import UserProfile from "../assets/Userprofile.jpeg";
import { mobile } from "../responsive";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";

const Container = styled.div`
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 95%;
  height: 112px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ${mobile({ height: "80px" })}
`;
const LogoSection = styled.div`
  width: 40%;
  ${mobile({ width: "40% " })}
`;
const Logo = styled.img`
  height: 73px;
  width: 115px;
  opacity: 80%;
  ${mobile({ height: "50px", width: "80px" })}
`;
const MidSection = styled.div`
  margin-right: 3rem;
`;
const MidLogo = styled.img`
  height: 70px;
  width: 70px;
  ${mobile({ height: "50px", width: "50px" })}
`;
const IconSection = styled.div`
  display: flex;
  gap: 15px;
`;
const Icons = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: white;
  color: #ee1d52;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const IconOne = styled(AiOutlineDollarCircle)`
  height: 28px;
  width: 28px;
`;
const IconTwo = styled(IoSettingsOutline)`
  height: 28px;
  width: 28px;
`;
const IconThree = styled(RiCustomerService2Line)`
  height: 28px;
  width: 28px;
`;
const IconFour = styled(IoNotificationsOutline)`
  height: 28px;
  width: 28px;
`;
const Underline = styled.div`
  width: 2px;
  height: 50%;
  background-color: #88888880;
`;
const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;
const Profile = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  object-fit: cover;
  ${mobile({ height: "30px", width: "30px" })}
`;
const InfoSection = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-family: "Nunito Sans", sans-serif;
  ${mobile({ display: "none" })}
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const User = styled.div`
  font-size: 12px;
`;
const ExitIcon = styled(IoMdExit)`
  color: white;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${mobile({ height: "25px", width: "25px" })}
`;
const ShopLogo = styled.img`
  height: 79px;
  width: 87px;
  opacity: 80%;
  ${mobile({ display: "none" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Section>
        <LogoSection>
          <Logo src={LeftLogo} />
        </LogoSection>
        <MidSection>
          <MidLogo src={CenterLogo} />
        </MidSection>
        <IconSection>
          <Icons>
            <IconOne />
          </Icons>
          <Icons>
            <IconTwo />
          </Icons>
          <Icons>
            <IconThree />
          </Icons>
          <Icons>
            <IconFour />
          </Icons>
        </IconSection>
        <ProfileSection>
          <Underline></Underline>
          <Profile src={UserProfile} />
          <InfoSection>
            <Name>Thomas</Name>
            <User>User</User>
          </InfoSection>
          <ExitIcon path="/login" />
        </ProfileSection>
        <ShopLogo src={RightLogo} />
      </Section>
    </Container>
  );
};

export default Navbar;
