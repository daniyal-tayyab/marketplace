import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Button from "./button/Button";

import { dark } from "../styles/Themes";

import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 13rem;
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;

  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
`;

const ButtonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  font-size: ${(props) => props.theme.fontlg};
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="The robot" />
        <img src={img2} alt="The robot" />
        <img src={img3} alt="The robot" />
        <img src={img4} alt="The robot" />
        <img src={img5} alt="The robot" />
        <img src={img6} alt="The robot" />
      </ImgContainer>
      <Title>
        Join the <br /> Robot club
      </Title>
      <ButtonContainer>
        <ThemeProvider theme={dark}>
          <Button text="Join Now" link="#" />
        </ThemeProvider>
      </ButtonContainer>
    </Section>
  );
};

export default Banner;
