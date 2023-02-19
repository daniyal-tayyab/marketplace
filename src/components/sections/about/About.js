import React from "react";
import Carousel from "../../Carousel";

import Button from "../../button/Button";

import {
  Section,
  Container,
  Box,
  Title,
  SubText,
  SubTextLight,
  ButtonConatiner,
} from "./About.styles";

import { dark } from "../../../styles/Themes";
import { ThemeProvider } from "styled-components";

const About = () => {
  return (
    <Section>
      <Container>
        <Box style={{ color: "black" }}>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome To The Robordrop Club.</Title>
          <SubText>
            The ROBOTDROP CLUB is a private collection of NFTs—unique digital
            collectibles. The ROBOTS are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ButtonConatiner>
            <ThemeProvider theme={dark}>
              <Button text="Join Now" link="#create" />
            </ThemeProvider>
          </ButtonConatiner>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
