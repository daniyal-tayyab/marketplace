import React from "react";

import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti
      width={width}
      height={height * 2}
      numberOfPieces={150}
      gravity={0.01}
    />
  );
};

export default Confetti;
