import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  align-self: ${(props) => props.align || "stretch"};

  ${
    "" /* //пример установки стилей в зависимости от пропсов(primary, outlined - булевы значения, кот задают те или иные стили при передаче) */
  }
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `};

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

//маштабирование стилей компонента на основе наследования
const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
  //   return <LargeButton {...props} />;
};

export default Button;
