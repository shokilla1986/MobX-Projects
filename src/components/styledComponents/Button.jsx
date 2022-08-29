import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0deg)
}
100%{
    transform: rotateZ(360deg)
}
`;
//с помощью attrs можно задать дефолтные пропсы для компонента
const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
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
