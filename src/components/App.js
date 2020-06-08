import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import MainContainer from "./ui/MainContainer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Hero />
        {[...new Array(60)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
