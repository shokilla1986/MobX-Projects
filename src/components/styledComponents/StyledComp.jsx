import React from "react";
import styled from "styled-components";
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
      <Title color={"green"}>children children</Title>
    </StyledWrapper>
  );
};

export default StyledComp;
