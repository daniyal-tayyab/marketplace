import styled from "styled-components";

export const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  z-index: 5;
  backdrop-filter: blur(4px);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};

  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

export const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  margin-top: 0.5rem;
`;
