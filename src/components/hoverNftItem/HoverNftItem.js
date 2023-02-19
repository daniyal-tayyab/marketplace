import React from "react";

import { Item, ImageContainer, Name, Position } from "./HoverNftItem.styles";

const HoverNftItem = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

export default HoverNftItem;
