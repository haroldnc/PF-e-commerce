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
<<<<<<< HEAD
      <Hero />
      <Carousel />
      <Presentation />

=======
      <Carousel />
      <Presentation />
>>>>>>> d4f028dde218713838bc324587033d2e61285dfe
      <Footer />
    </ThemeProvider>
  );
}

export default App;
