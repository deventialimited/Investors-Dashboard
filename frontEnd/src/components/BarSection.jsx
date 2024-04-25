import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { SectionData } from "../data";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { tabletPro } from "../responsive";
import { tabletMini } from "../responsive";
import { samsungTab } from "../responsive";
import { api } from "../axios/axios";

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



const BarSection = ({setData}) => {

  const [stats, setStats] = useState(null)
  let SectionData = [
    {
      id: 1,
      amount: `$${stats?.totalEarning}`,
      title: "Total Earning",
      color: "#75C37D",
    },
    {
      id: 2,
      amount: `$${stats?.totalCashIn}`,
      title: "Total Cash-In",
      color: "#FFA726",
    },
    {
      id: 3,
      amount: `$${stats?.totalEarning}`,
      title: "Total Cash-Out",
      color: "#F25A68",
    },
    {
      id: 4,
      amount: `$${stats?.totalCommission}`,
      title: "Total Commission",
      color: "#4285F4",
    },
    {
      id: 5,
      amount: `${stats?.totalReferrals}`,
      title: "Total Referrals",
      color: "#E9734E",
    },
  ];

  useEffect(() => {
    const fetchStats = async () => {

      const { data } = await api.get('/dashboard/get-stats')
      setStats(data)
      setData(data)
    }

    fetchStats()
  }, [])


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
