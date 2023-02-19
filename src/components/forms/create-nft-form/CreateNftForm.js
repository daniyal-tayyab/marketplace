import React, { useEffect, useState } from "react";

import {
  Container,
  ArtistSection,
  Title,
  ImageSection,
  ImageContainer,
  UploadImageSection,
  LabelDiv,
  AllowedFormats,
  ArtistContainer,
  RaritySection,
  SupplySection,
} from "./CreateNftForm.styles";

import nft from "../../../assets/Nfts/bighead-8.svg";
import InputField from "../../input-field/InputFiled";
import InputText from "../../input-text/InputText";

import {
  Autocomplete,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import Button from "../../button/Button";

const rarityArray = [
  "Common",
  "Un Common",
  "Rare",
  "Master Class",
  "legendary",
];

const CreateNftForm = () => {
  const [artwork, setArtWork] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [artistName, setArtistName] = useState("");
  const [artistDescription, setArtistDescription] = useState("");
  const [supplyType, setSupplyType] = useState("");

  useEffect(() => {
    if (!artwork.length || artwork.length > 1) return;
    const newImageUrls = [];
    artwork.forEach((artwork) =>
      newImageUrls.push(URL.createObjectURL(artwork))
    );
    setImageUrls(newImageUrls);
  }, [artwork]);

  const handleArtwork = (event) => {
    setArtWork([...event.target.files]);
  };

  const handleAtristName = (event) => {
    setArtistName(event.target.value);
  };

  const handleArtistDescription = (event) => {
    setArtistDescription(event.target.value);
  };

  const handleSupplyType = (type) => {
    setSupplyType(type);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <ArtistSection>
          <Title>select artwork</Title>
          <ImageSection>
            <ImageContainer>
              {imageUrls.length ? (
                imageUrls.map((artwork) => <img src={artwork} alt="artwork" />)
              ) : (
                <img src={nft} alt="nft" />
              )}
            </ImageContainer>
            <UploadImageSection>
              <LabelDiv>
                <label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleArtwork}
                    hidden
                  />
                  Upload photo
                </label>
              </LabelDiv>
              <AllowedFormats>
                Allowed formats: .jpg, .png, .jpeg
              </AllowedFormats>
            </UploadImageSection>
          </ImageSection>
          <ArtistContainer>
            <Title>Artwork</Title>
            <InputField
              placeholder="Enter Name of Nft"
              type="text"
              value={artistName}
              onChange={handleAtristName}
            />
            <InputText
              placeholder="Enter Description of Nft"
              rows="6"
              onChange={handleArtistDescription}
            />
          </ArtistContainer>
        </ArtistSection>
        <RaritySection>
          <Title>Select Rarity</Title>
          <Autocomplete
            style={{ width: "20rem", marginTop: "10px" }}
            options={rarityArray}
            renderInput={(params) => (
              <TextField {...params} label="Rarity" size="small" />
            )}
          />
        </RaritySection>
        <SupplySection>
          <Title>Select Supply Type</Title>
          <FormControl>
            <RadioGroup row defaultValue="top" aria-label="position">
              <FormControlLabel
                label="Singel"
                value="Single"
                control={<Radio color="secondary" size="small" />}
                onChange={() => handleSupplyType("Singel")}
              />
              <FormControlLabel
                label="Variable"
                value="Variable"
                control={<Radio color="secondary" size="small" />}
                onChange={() => handleSupplyType("Variable")}
              />
            </RadioGroup>
          </FormControl>
          <InputField
            placeholder="Enter Name of Nft"
            type="text"
            value={artistName}
            onChange={handleAtristName}
          />
          <LabelDiv
            style={{
              width: "13rem",
              textAlign: "center",
            }}
          >
            Add NFT to Queue
          </LabelDiv>
        </SupplySection>
      </Container>
      <LabelDiv
        style={{
          width: "10rem",
          textAlign: "center",
          margin: " 0 auto",
          marginTop: "1rem",
        }}
      >
        Create NFT
      </LabelDiv>
    </div>
  );
};

export default CreateNftForm;
