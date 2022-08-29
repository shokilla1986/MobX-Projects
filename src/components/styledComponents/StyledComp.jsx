import React from "react";
import styled from "styled-components";
import Console from "./Console";
import Flex from "./Flex";
import Title from "./Title";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 95vh;
  padding: 2rem;
  background: black;
  font-family: consolas;
`;

const StyledComp = () => {
  return (
    <StyledWrapper>
      <Flex justify={"center"}>
        <Title color={"green"}>children children</Title>
      </Flex>
      <Console />
    </StyledWrapper>
  );
};

export default StyledComp;
