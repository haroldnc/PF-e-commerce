import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={themes.light}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div>
        <GlobalStyle />
      </div>
      <Hero />
      <Carousel />
      <Presentation />
      <Carousel />
      <Testimonials/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
