import React from "react";
import styled from "styled-components";
import { LineChart, LinePlot } from "@mui/x-charts/LineChart";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { mobile } from "../responsive";
import { ChartsXAxis, ResponsiveChartContainer } from "@mui/x-charts";
import { colors } from "@mui/material";

const Container = styled.div``;

const ChartSections = styled.div`
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

const TextArea = styled.div`
  text-align: left;
  width: 95%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "12px", flexDirection: "column", gap: "0.5rem" })}
`;
const Text = styled.div``;
const Span = styled.span`
  color: #66666699;
`;
const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ee1d52;
  ${mobile({ gap: "10px" })}
`;
const ButtonLeft = styled(MdKeyboardDoubleArrowLeft)`
  border: 1px solid #ee1d52;
  border-radius: 14px;
  width: 40px;
  height: 26px;
  cursor: pointer;
  ${mobile({ borderRadius: "6px", width: "25px", height: "20px" })}
`;
const ButtonRight = styled(MdKeyboardDoubleArrowRight)`
  border: 1px solid #ee1d52;
  border-radius: 14px;
  width: 40px;
  height: 26px;
  cursor: pointer;

  ${mobile({ borderRadius: "6px", width: "25px", height: "20px" })}
`;
const Date = styled.div`
  font-size: 16px;
  text-align: center;
  color: black;
  ${mobile({ fontSize: "12px" })}
`;

const ChartSection = () => {
  return (
    <Container>
      <ChartSections>
        <TextArea>
          <Text>
            Earnings Overview
            <Span>(for Last 30 days)</Span>
          </Text>
          <RightArea>
            <ButtonLeft></ButtonLeft>
            <Date>March 2024</Date>
            <ButtonRight></ButtonRight>
          </RightArea>
        </TextArea>

        <ResponsiveChartContainer
          height={300}
          series={[{ type: "line", data: [1, 2, 3, 2, 1], color: "#EE1D52" }]}
          xAxis={[
            {
              data: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
              ],

              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
        >
          <LinePlot />
          <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
        </ResponsiveChartContainer>
      </ChartSections>
    </Container>
  );
};

export default ChartSection;
