import React from "react";
import styled from "styled-components";
import GIF from "../assets/Home-Gif.gif";

const VideoConatiner = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoConatiner>
      <img src={GIF} alt="loading..." />
    </VideoConatiner>
  );
};

export default CoverVideo;
