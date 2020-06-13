import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import MainContainer from "./ui/MainContainer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import AboutMe from "./ui/AboutMe";
import Education from "./ui/Education";
import Employment from "./ui/Employment";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Hero />
        <AboutMe />
        <Education />
        <Employment />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
