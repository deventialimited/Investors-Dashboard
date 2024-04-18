import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Chart from "react-apexcharts";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #171717;
  font-family: "Poppins", sans-serif;
`;
const ChartSection = styled.div`
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
const data = {
  options: {
    colors: ["#004d99"],
    chart: {
      id: "Trades",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7],
    },
  },
  series: [
    {
      name: "balance",
      data: [19, 5, 35, 19, 55, 15, 68, 55],
    },
  ],
};
const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Container>
        <Text>Dashboard</Text>
        <ChartSection>
          <Chart
            options={data.options}
            series={data.series}
            type="area"
            width="500"
          />
        </ChartSection>
      </Container>
    </Container>
  );
};

export default Dashboard;
