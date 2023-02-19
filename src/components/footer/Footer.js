import React from "react";

import Banner from "../Banner";
import Logo from "../Logo";

import FaceBook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";

import {
  Section,
  Container,
  Left,
  IconList,
  MenuItems,
  Item,
  Bottom,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="#" target="_blank">
              <FaceBook />
            </a>
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <LinkedIn />
            </a>
            <a href="#" target="_blank">
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>Market Place</Item>
          <Item>Drops</Item>
          <Item>About</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Robot Drop. All rights reserved
        </span>
        <span>Made with &#10084; by Daniyal Tayyab</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
