import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import axios from "axios";
import { api } from "../axios/axios";
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
`;

const Text = styled.div`
  margin-bottom: 2rem;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "15px" })}
`;

const InfoArea = styled.div`
  width: 90%;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #666666;
  font-size: 15px;
  ${mobile({ fontSize: "10px" })}
`;

const Underline = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  height: 2px;
`;

const Title = styled.div``;
const Amount = styled.div``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Summary = () => {
  const [summaryData, setSummaryData] = useState({
    totalReferrals: 0,
    pendingReferrals: 0,
    totalCommission: 0,
  });

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const { data } = await api.get("/referral/getAllactivities", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setSummaryData({
          totalReferrals: data.totalReferrals,
          pendingReferrals: data.pendingReferrals,
          totalCommission: data.totalCommission,
        });
      } catch (error) {
        console.log("Error fetching summary data:", error);
      }
    };

    fetchSummaryData();
  }, [user.token]);

  const { totalReferrals, pendingReferrals, totalCommission } = summaryData;

  console.log("totalReferrals",totalReferrals)
  return (
    <Section>
      <Text>Summary for This Month</Text>
      <InfoArea>
        <Info>
          <Title>Total Referrals</Title>
          <Amount>{totalReferrals}</Amount>
        </Info>
        <Underline />
      </InfoArea>
      <InfoArea>
        <Info>
          <Title>Pending Referrals</Title>
          <Amount>{pendingReferrals}</Amount>
        </Info>
        <Underline />
      </InfoArea>
      <InfoArea>
        <Info>
          <Title>Total Commission</Title>
          <Amount>${totalCommission}</Amount>
        </Info>
        <Underline />
      </InfoArea>
    </Section>
  );
};

export default Summary;
