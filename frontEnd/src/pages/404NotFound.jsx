import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  color: #666;
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Heading>404 Not Found</Heading>
      <Paragraph>The page you are looking for does not exist.</Paragraph>
    </NotFoundWrapper>
  );
};

export default NotFound;