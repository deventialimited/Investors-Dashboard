import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LineChart, LinePlot } from "@mui/x-charts/LineChart";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { mobile } from "../responsive";
import { ChartsXAxis, ResponsiveChartContainer } from "@mui/x-charts";
import { colors } from "@mui/material";
import { api } from "../axios/axios";

const Container = styled.div``;

const ChartSections = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
`;

const ChartLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const ChartSection = () => {

  const [chartData, setChartData] = useState([]);

  const fetchChartData = async () => {
    try {
      const {data} = await api.get('/dashboard/get-chart-data')
      setChartData(data.dataPoints);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchChartData()
  }, [])


  return (
    <Container>
      <ChartSections>
      <ChartLabel>Earnings Overview</ChartLabel>
      <ResponsiveChartContainer
          height={300}
          series={[{ type: "line", data: chartData, color: "#EE1D52" }]}
          xAxis={[
            {
              data: Array.from({ length: 30 }, (_, i) => String(i + 1)),
              scaleType: "linear",
              id: "x-axis-id",
            },
          ]}
        >
          <LinePlot />
          <ChartsXAxis label="" position="bottom" axisId="x-axis-id" />
        </ResponsiveChartContainer>
      </ChartSections>
    </Container>
  );
};

export default ChartSection;
