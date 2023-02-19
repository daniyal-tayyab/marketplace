import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.color};

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">robotdrop</Link>
    </LogoText>
  );
};

export default Logo;
