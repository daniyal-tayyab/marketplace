import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global.styles";

import { light } from "./styles/Themes";

import HomePage from "./HomePage";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CreateNft from "./pages/create-nft/CreateNft";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-nft" element={<CreateNft />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
