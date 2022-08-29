import React from "react";
import styled from "styled-components";
import Button from "./Button";
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
        <Title color={"green"}>Изучаю Styled Components </Title>
      </Flex>
      <Flex direction={"column"}>
        <Console />
        {/* варианты передачи пропсов и стилей */}
        {/* <Button primary color={"red"} background={"green"} align={"flex-end"}> */}
        <Button outlined color="green" align={"flex-end"}>
          Отправить
        </Button>
      </Flex>
    </StyledWrapper>
  );
};

export default StyledComp;
