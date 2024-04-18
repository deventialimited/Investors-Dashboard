import React from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Container = styled.div`
  background-image: linear-gradient(to right, #ee1d52, #9f2155, #002a5c);
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const BarInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bar = styled.div`
  font-weight: 500;
  font-size: 22px;
`;
const Icon = styled(IoMdCloseCircleOutline)`
  height: 35px;
  width: 35px;
`;

const Link = () => {
  return (
    <Container>
      <BarInfo>
        <Bar>Generate Referral Link</Bar>
        <Icon />
      </BarInfo>
    </Container>
  );
};

export default Link;
