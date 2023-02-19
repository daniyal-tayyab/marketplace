import React, { useRef } from "react";

import NftItem from "../../nftItem/NftItem";

import { Section, Row } from "./Showcase.styles";

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

const Showcase = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  return (
    <Section>
      <Row direction="none" ref={row1Ref}>
        <NftItem img={img1} number={23} price={12} passRef={row1Ref}>
          Item 1
        </NftItem>
        <NftItem img={img2} number={32} price={32} passRef={row1Ref}>
          Item 2
        </NftItem>
        <NftItem img={img3} number={51} price={54} passRef={row1Ref}>
          Item 3
        </NftItem>
        <NftItem img={img4} number={12} price={98} passRef={row1Ref}>
          Item 4
        </NftItem>
        <NftItem img={img5} number={53} price={67} passRef={row1Ref}>
          Item 5
        </NftItem>
      </Row>
      <Row direction="reverse" ref={row2Ref}>
        <NftItem img={img6} number={76} price={65} passRef={row2Ref}>
          Item 1
        </NftItem>
        <NftItem img={img7} number={94} price={35} passRef={row2Ref}>
          Item 2
        </NftItem>
        <NftItem img={img8} number={21} price={91} passRef={row2Ref}>
          Item 3
        </NftItem>
        <NftItem img={img9} number={79} price={28} passRef={row2Ref}>
          Item 4
        </NftItem>
        <NftItem img={img10} number={95} price={81} passRef={row2Ref}>
          Item 5
        </NftItem>
      </Row>
    </Section>
  );
};

export default Showcase;
