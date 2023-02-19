import React from "react";
import styled from "styled-components";

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};

  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  text-align: center;
  border-radius: 50%;
  cursor: pointer;
`;

const ScrollToTop = () => {
  return <Up>&#x2191;</Up>;
};

export default ScrollToTop;
