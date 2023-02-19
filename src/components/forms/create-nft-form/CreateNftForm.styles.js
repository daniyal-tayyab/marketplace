import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 30rem;
  padding: 1rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* background-color: lightcoral; */
`;

// Artwork
export const ArtistSection = styled.div`
  width: 100%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const Title = styled.h3`
  font-size: 1rem;
  text-transform: capitalize;
`;

export const ImageSection = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  width: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 5.5rem;
    border-radius: 3px;
    margin-top: -10px;
  }
`;

export const UploadImageSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
`;

export const LabelDiv = styled.div`
  text-transform: capitalize;
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: 0.8rem;
  padding: 0.8rem 1.3rem;
  border-radius: 40px;
  cursor: pointer;
  position: relative;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};

    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

export const AllowedFormats = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const ArtistContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

// Artwork

// Rarity Section

export const RaritySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

// Rarity Section

// Token Supply

export const SupplySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem 0;

  margin-top: 1rem;
  /* background-color: white; */
`;

// Token Supply
