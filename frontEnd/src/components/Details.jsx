import React, { useState } from "react";
import styled from "styled-components";
import Reference from "./Reference";
import Summary from "./Summary";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  ${mobile({ display: "flex", flexDirection: "column" })}
  ${tablet({ display: "flex", flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1.5;
`;
const Right = styled.div`
  flex: 1;
`;

const Details = ({ data }) => {
  return (
    <Container>
      <Left>
        <Reference />
      </Left>
      <Right>
        <Summary data={data} />
      </Right>
    </Container>
  );
};

export default Details;
