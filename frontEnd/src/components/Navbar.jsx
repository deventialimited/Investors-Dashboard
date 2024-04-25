import React from "react";
import styled from "styled-components";
import LeftLogo from "../assets/LeftLogo.png";
import RightLogo from "../assets/RightLogo.png";
import CenterLogo from "../assets/centerlogo.png";
import UserProfile from "../assets/Userprofile.jpeg";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../context/userSlice";

const Container = styled.div`
  background-image: linear-gradient(to right, #ee1d52e3, #002a5ce3);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
  }
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
  ${mobile({ height: "60px", width: "60px" })}
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
  ${tablet({ display: "none" })}
`;
const IconOne = styled(AiOutlineDollarCircle)`
  height: 28px;
  width: 28px;
  ${tablet({ height: "20px", width: "20px" })}

  ${mobile({ height: "20px", width: "20px" })}
`;
const IconTwo = styled(IoSettingsOutline)`
  height: 28px;
  width: 28px;
  ${tablet({ height: "20px", width: "20px" })}

  ${mobile({ height: "20px", width: "20px" })}
`;
const IconThree = styled(RiCustomerService2Line)`
  height: 28px;
  width: 28px;
  ${tablet({ height: "20px", width: "20px" })}

  ${mobile({ height: "20px", width: "20px" })}
`;
const IconFour = styled(IoNotificationsOutline)`
  height: 28px;
  width: 28px;
  ${tablet({ height: "20px", width: "20px" })}

  ${mobile({ height: "20px", width: "20px" })}
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
  ${tablet({ display: "none" })}
`;
const InfoSection = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  font-family: "Nunito Sans", sans-serif;
  ${mobile({ display: "none" })} ${tablet({ display: "none" })}
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const User = styled.div`
  font-size: 12px;
`;
const ExitIcon = styled(MdOutlineExitToApp)`
  color: white;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${mobile({ display: "none", height: "25px", width: "25px" })}
  ${tablet({ display: "none" })}
`;
const ShopLogo = styled.img`
  height: 79px;
  width: 87px;
  opacity: 80%;
  ${tablet({ display: "none" })}
  ${mobile({ display: "none" })}
`;
const Menu = styled.div``;
const Hamburger = styled.div`
  margin-bottom: 1rem;
`;
const MenuIcon = styled(SlMenu)`
  display: none;
  ${tablet({
    display: "flex",
    height: "24px",
    width: "24px",
    color: "white",
    cursor: "pointer",
  })}
`;

const Sidebar = styled.div`
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  border: 1px solid black;
  width: 300px;
  z-index: 999;
  background-image: linear-gradient(to right, #ee1d52, #002a5c);
  backdrop-filter: blur(10px);
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.2);
  display: none;
  flex-direction: column;
  align-items: center;
`;

const Sec = styled.div`
  margin-top: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TopLogoIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84%;
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  ${tablet({ height: "25px", width: "25px" })}

  ${mobile({ height: "30px", width: "30px" })}
`;
const CloseIcon = styled(RxCross2)`
  display: none;
  ${tablet({
    display: "flex",
    height: "25px",
    width: "25px",
    color: "white",
    cursor: "pointer",
  })}
`;
const Span = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ee1d52;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
  }
  ${tablet({ fontSize: "11px" })}

  ${mobile({ fontSize: "13px" })}
`;
const IconSec = styled.span`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 5px;
  font-weight: 200;
  border-radius: 10px;
  padding: 10px 10px;

  &:hover {
    background-color: white;
    color: #ee1d52;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
  }
`;
const LastIcon = styled(MdOutlineExitToApp)`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  object-fit: cover;
  ${tablet({ height: "20px", width: "20px" })}

  ${mobile({ height: "20px", width: "20px" })}
`;

const Navbar = () => {
  const handleMenu = () => {
    const sidebar = document.querySelector(Sidebar);
    sidebar.style.display = "flex";
  };
  const handleExit = () => {
    const sidebar = document.querySelector(Sidebar);
    sidebar.style.display = "none";
  };

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    console.log("hit the logout: ");
    dispatch(logout())
  }

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
            <Name>{user ? <>{user.fullName}</> : <>Thomas</>}</Name>
            <User>User</User>
          </InfoSection>
          <ExitIcon onClick={handleLogout} />
        </ProfileSection>
        <ShopLogo src={RightLogo} />
        <Menu>
          <Hamburger>
            <MenuIcon onClick={handleMenu}></MenuIcon>
          </Hamburger>
          <Sidebar>
            <Sec>
              <TopLogoIcon>
                <MidLogo src={CenterLogo} />
                <CloseIcon onClick={handleExit} />
              </TopLogoIcon>
              <IconSec>
                <Img src={UserProfile} />
                <Span href="/profile">My Profile</Span>
              </IconSec>
              <IconSec>
                <IconOne></IconOne>
                <Span>Payment</Span>
              </IconSec>
              <IconSec>
                <IconTwo></IconTwo>
                <Span>Setting</Span>
              </IconSec>
              <IconSec>
                <IconThree></IconThree>
                <Span>Customer Support</Span>
              </IconSec>
              <IconSec>
                <IconFour></IconFour>
                <Span>Notification</Span>
              </IconSec>
              <IconSec>
                <LastIcon />
                <Span href="/login">Exit</Span>
              </IconSec>
            </Sec>
          </Sidebar>
        </Menu>
      </Section>
    </Container>
  );
};

export default Navbar;
