import React from "react";

import Home from "./components/sections/home/Home";
import About from "./components/sections/about/About";
import Showcase from "./components/sections/showcase/Showcase";
import Team from "./components/sections/team/Team";
import Faq from "./components/sections/faq/Faq";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Team />
      <Showcase />
      <Faq />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
