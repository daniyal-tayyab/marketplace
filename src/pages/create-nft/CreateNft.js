import React from "react";
import CreateNftForm from "../../components/forms/create-nft-form/CreateNftForm";

import { Section, Container, Title } from "./CreateNft.styles";

const CreateNft = () => {
  return (
    <Section>
      <Container>
        <Title>Create Nft</Title>
        <CreateNftForm />
      </Container>
    </Section>
  );
};

export default CreateNft;
