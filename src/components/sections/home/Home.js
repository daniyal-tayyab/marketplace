import React from "react";

import CoverVideo from "../../CoverVideo";
import TypeWritterText from "../../TypeWritterText";

import { Container, Section, Box, Round, Circle } from "./Home.styles";

import RoundTextBlack from "../../../assets/Rounded-Text-Black.png";

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWritterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
