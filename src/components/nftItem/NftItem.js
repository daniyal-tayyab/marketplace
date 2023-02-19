import React from "react";

import { ImgContainer, Details, Price } from "./NftItem.styles";

import ETH from "../../assets/icons8-ethereum-48.png";

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  const playAnimation = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  const pauseAnimation = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer
      onMouseOver={(e) => pauseAnimation(e)}
      onMouseOut={(e) => playAnimation(e)}
    >
      <img src={img} alt="NFT" />
      <Details>
        <div>
          <span>Robot</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span> <br />
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)} Eth</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

export default NftItem;
