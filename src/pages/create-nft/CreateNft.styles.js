import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 45rem;

  display: flex;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  justify-content: center;
  align-items: flex-start;

  background-color: #ededed;
`;

export const Container = styled.div`
  width: 60%;
  height: 38rem;
  background-color: rgba();
  padding: 1rem;
  margin: 1rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
`;

export const Title = styled.h2`
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
