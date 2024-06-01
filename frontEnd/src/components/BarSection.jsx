import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet, tabletPro, tabletMini, samsungTab } from "../responsive";
import { api } from "../axios/axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  ${tabletPro({ gap: "1rem" })}
  ${tablet({ gap: "1rem" })}
  ${tabletMini({ gap: "0.5rem" })}
  ${samsungTab({ gap: "0rem" })}
`;

const Section = styled.div`
  box-shadow: 0px 8px 17px 1px #002a5c33;
  padding: 5px;
  width: 210px;
  height: 144px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tabletPro({ width: "150px", height: "140px " })}
  ${tablet({ width: "130px", height: "100px " })}
  ${tabletMini({ width: "100px", height: "90px " })}
  ${samsungTab({ width: "70px", height: "70px " })}
  ${mobile({ width: "60px", height: "50px " })}
`;

const Info = styled.div`
  width: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${tabletPro({ gap: "0.5rem" })}
  ${samsungTab({ gap: "0.2rem" })}
`;

const Amount = styled.div`
  font-size: 32px;
  font-weight: 600;
  ${tabletPro({ fontSize: "20px" })}
  ${tablet({ fontSize: "16px" })}
  ${tabletMini({ fontSize: "15px" })}
  ${samsungTab({ fontSize: "13px" })}
  ${mobile({ fontSize: "11px" })}
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  ${tabletPro({ fontSize: "15px" })}
  ${tablet({ fontSize: "13px" })}
  ${tabletMini({ fontSize: "12px" })}
  ${samsungTab({ fontSize: "9px" })}
  ${mobile({ fontSize: "5px" })}
`;

const BarSection = ({ setData }) => {
  const user = useSelector((state) => state.user);
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [totalCommission, setTotalCommission] = useState(0);
  const [totalCashIn, setTotalCashIn] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalCommission = async () => {
      try {
        const { data } = await api.get(`/receipt/TotalCommission/${user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTotalCommission(data.totalCommission);
      } catch (error) {
        setError("Failed to fetch total commission");
      } finally {
        setLoading(false);
      }
    };

    const fetchTotalCashIn = async () => {
      try {
        const { data } = await api.get(`/receipt/TotalCashIn/${user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTotalCashIn(data.totalCashIn);
      } catch (error) {
        setError("Failed to fetch total cash-in");
      } finally {
        setLoading(false);
      }
    };

    const fetchTotalReferrals = async () => {
      try {
        const { data } = await api.get("/referral/TotalRefferal", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTotalReferrals(data.totalReferrals);
      } catch (error) {
        setError("Failed to fetch total referrals");
      } finally {
        setLoading(false);
      }
    };

    const fetchTotalEarnings = async () => {
      try {
        const { data } = await api.get(`/receipt/TotalEarnings/${user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTotalEarnings(data.totalEarnings);
      } catch (error) {
        setError("Failed to fetch total earnings");
      } finally {
        setLoading(false);
      }
    };

    fetchTotalCommission();
    fetchTotalCashIn();
    fetchTotalReferrals();
    fetchTotalEarnings();
  }, [user.token, user._id]);

  const SectionData = [
    {
      id: 1,
      amount: `₱${totalEarnings}`,
      title: "Total Earnings",
      color: "#75C37D",
    },
    {
      id: 2,
      amount: `₱${totalCashIn}`,
      title: "Total Cash-In",
      color: "#FFA726",
    },
    {
      id: 3,
      amount: `₱${150}`,
      title: "Total Cash-Out",
      color: "#F25A68",
    },
    {
      id: 4,
      amount: `₱${totalCommission}`,
      title: "Total Commission",
      color: "#4285F4",
    },
    {
      id: 5,
      amount: `${totalReferrals}`,
      title: "Total Referrals",
      color: "#E9734E",
    },
  ];

  return (
    <Container>
      {SectionData.map((item) => (
        <Section key={item.id} style={{ backgroundColor: item.color }}>
          <Info>
            <Amount>{item.amount}</Amount>
            <Text>{item.title}</Text>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default BarSection;
