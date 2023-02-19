import React from "react";

import { Section, Title, Container } from "./Team.styles";

import Confetti from "../../Confetti";

import img1 from "../../../assets/Nfts/bighead-1.svg";
import img2 from "../../../assets/Nfts/bighead-2.svg";
import img3 from "../../../assets/Nfts/bighead-3.svg";
import img4 from "../../../assets/Nfts/bighead-4.svg";
import img5 from "../../../assets/Nfts/bighead-5.svg";
import img6 from "../../../assets/Nfts/bighead-6.svg";
import img7 from "../../../assets/Nfts/bighead-7.svg";
import img8 from "../../../assets/Nfts/bighead-8.svg";
import img9 from "../../../assets/Nfts/bighead-9.svg";
import img10 from "../../../assets/Nfts/bighead-10.svg";
import HoverNftItem from "../../hoverNftItem/HoverNftItem";

const Team = () => {
  return (
    <Section>
      <Confetti />
      <Title>Market Place</Title>
      <Container>
        <HoverNftItem
          img={img1}
          name="Robot 1"
          position="On Auction"
        ></HoverNftItem>
        <HoverNftItem
          img={img2}
          name="Robot 2"
          position="Auction Ended"
        ></HoverNftItem>
        <HoverNftItem
          img={img3}
          name="Robot 3"
          position="auction ended"
        ></HoverNftItem>
        <HoverNftItem
          img={img4}
          name="Robot 4"
          position="On Auction"
        ></HoverNftItem>
        <HoverNftItem
          img={img5}
          name="Robot 5"
          position="On Auction"
        ></HoverNftItem>
        <HoverNftItem
          img={img6}
          name="Robot 6"
          position="auction ended"
        ></HoverNftItem>
        <HoverNftItem
          img={img7}
          name="Robot 7"
          position="On Auction"
        ></HoverNftItem>
        <HoverNftItem
          img={img8}
          name="Robot 8"
          position="on auction"
        ></HoverNftItem>
        <HoverNftItem
          img={img9}
          name="Robot 9"
          position="auction ended"
        ></HoverNftItem>
      </Container>
    </Section>
  );
};

export default Team;
