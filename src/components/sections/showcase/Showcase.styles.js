import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  /* & > *:first-child {
    animation-duration: 20s;
  }

  & > *:last-child {
    animation-duration: 15s;
  } */
`;

const move = keyframes`
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
`;

export const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;

  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;
