import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Logo from "../Logo";
import { Section, NavBar, Menu, MenuItem } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Market place</MenuItem>
          <MenuItem>Drops</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
        <Link to="/create-nft">
          <Button text="connect wallet" />
        </Link>
      </NavBar>
    </Section>
  );
};

export default Navigation;
// text="Connect Wallet" link="/create-nft"
