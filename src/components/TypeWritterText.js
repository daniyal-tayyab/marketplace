import React from "react";

import Typewriter from "typewriter-effect";

import styled from "styled-components";
import Button from "./button/Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;

  width: 80%;
  color: ${(props) => props.theme.text};

  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: #9f55ff;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: #dc3545;
  }
`;

const SubTitle = styled.h3`
  font-size: 19px;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  align-self: flex-start;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
`;

const ButtonConatiner = styled.div`
  align-self: flex-start;
  width: 80%;
`;

const TypeWritterText = () => {
  return (
    <>
      <Title>
        Discover a new <br />
        era of cool
        <Typewriter
          options={{
            strings: [
              "<span class='text-1'>nfts!</span>",
              "<span class='text-2'>Collectible Items.</span>",
              "<span class='text-3'>Ape Killers!</span>",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Title>
      <SubTitle>Bored of Apes? Try something new.</SubTitle>
      <ButtonConatiner>
        <Button text="Explore" link="#about" />
      </ButtonConatiner>
    </>
  );
};

export default TypeWritterText;
