import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 700;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 700;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;
