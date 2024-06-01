import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { api } from "../axios/axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopText = styled.div`
  font-size: 20px;
  font-weight: 500;
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
`;

const Bottom = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: center;
  border-top: 1px solid #01365914;
  padding: 12px 15px;
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
`;

const RightIcon = styled(MdKeyboardDoubleArrowRight)`
  height: 20px;
  width: 20px;
`;

const Text = styled.div`
  font-size: 12.52px;
`;

const TransactionHistory = () => {
  const [receipts, setReceipts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [receiptsPerPage] = useState(10);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const { data } = await api.get(`/receipt/getReceiptsByUserId`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setReceipts(data.receipts);
      } catch (error) {
        console.error("Error fetching receipts:", error);
      }
    };

    fetchReceipts();
  }, [user.token]);

  // Logic for displaying current receipts
  const indexOfLastReceipt = currentPage * receiptsPerPage;
  const indexOfFirstReceipt = indexOfLastReceipt - receiptsPerPage;
  const currentReceipts = receipts.slice(indexOfFirstReceipt, indexOfLastReceipt);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(receipts.length / receiptsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <TopText>Transaction History</TopText>
      <FormArea>
        <Section>
          <TitleArea>
            <Title>AccountID</Title>
            <Title>Date</Title>
            <Title>Commission Earned</Title>
            <Title>Sender Name</Title>
          </TitleArea>
          {currentReceipts.map((item) => (
            <ReferenceSection key={item._id}>
              <Bottom>
                <Link>{item.referenceNo}</Link>
              </Bottom>
              <Bottom>
                <Link>{new Date(item.createdAt).toLocaleDateString()}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.commission}</Link>
              </Bottom>
              <Bottom>
                <Link>{item.senderName}</Link>
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
        <Text>Page {currentPage} of {Math.ceil(receipts.length / receiptsPerPage)}</Text>
        <ButtonSection onClick={handleNextPage} disabled={currentPage === Math.ceil(receipts.length / receiptsPerPage)}>
          <Text>Next</Text>
          <RightIcon />
        </ButtonSection>
      </Pages>
    </Container>
  );
};

export default TransactionHistory;