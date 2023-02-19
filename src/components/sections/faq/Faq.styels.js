import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  width: 45%;
`;
