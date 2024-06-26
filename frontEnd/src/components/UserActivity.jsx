import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { mobile, tablet } from "../responsive";
import { api } from "../axios/axios";
import { format } from "date-fns";
import { useSelector } from "react-redux";

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
  padding-inline: 0.7rem;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 10px 0px;
  border-radius: 25px 25px 0px 0px;
  background-color: #e6eaef80;
  border-bottom: 1px solid #dbdbdb;
`;

const Title = styled.a`
  width: 90%;
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
  justify-content: left;
  border-top: 1px solid #01365914;
  padding: 10px 0px;
  ${tablet({ height: "30px" })}
  ${mobile({ height: "24px", width: "100%", gap: "5px" })}
`;

const Link = styled.div`
  width: 100%;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
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
  @media (max-width: 1200px) {
    font-size: 12px;
    width: 90%;
  }
  @media (max-width: 1080px) {
    font-size: 11px;
    width: 90%;
  }
  ${tablet({
    fontSize: "9px",
    width: "85%",
  })}
  @media (max-width: 760px) {
    width: 130px;
  }
  @media (max-width: 630px) {
    width: 100px;
  }
  ${mobile({ fontSize: "9px", height: "20px", width: "80px" })};
  @media (max-width: 435px) {
    width: 70px;
  }
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
  cursor: pointer;
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

const UserActivity = () => {
  const [refs, setRefs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [refsPerPage] = useState(10);
  const user = useSelector((state) => state.user);

  const formatDate = (date) => format(new Date(date), "dd MMM yyyy");

  useEffect(() => {
    const fetchRefs = async () => {
      try {
        const { data } = await api.get("/referral/get-refs", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setRefs(data.referrals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRefs();
  }, [user.token]);

  // Logic for displaying current referrals
  const indexOfLastRef = currentPage * refsPerPage;
  const indexOfFirstRef = indexOfLastRef - refsPerPage;
  const currentRefs = refs.slice(indexOfFirstRef, indexOfLastRef);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(refs.length / refsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <TopText>User's Referral Activity</TopText>
      <FormArea>
        <Section>
          <TitleArea>
            <Title>Referral Link</Title>
            <Title>Date Referred</Title>
            <Title>Referral Code</Title>
            <Title>Status</Title>
          </TitleArea>
          {currentRefs.map((item) => (
            <ReferenceSection key={item.id}>
              <Bottom>
                <Link>{item.referralLink}</Link>
              </Bottom>
              <Bottom>
                <Link>{formatDate(item.createdAt)}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.referralCode}</Link>
              </Bottom>
              <Bottom>
                <Link status={item.status}>{item.status}</Link>
              </Bottom>
            </ReferenceSection>
          ))}
        </Section>
      </FormArea>
      <Pages>
        <ButtonSection onClick={handlePreviousPage} disabled={currentPage === 1}>
          <LeftIcon />
          <Text>Previous</Text>
        </ButtonSection>
        <Text>Page {currentPage} of {Math.ceil(refs.length / refsPerPage)}</Text>
        <ButtonSection onClick={handleNextPage} disabled={currentPage === Math.ceil(refs.length / refsPerPage)}>
          <Text>Next</Text>
          <RightIcon />
        </ButtonSection>
      </Pages>
    </Container>
  );
};

export default UserActivity;
