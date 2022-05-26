import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
// import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import ModalLogIn from "./components/ModalLogIn/ModalLogIn";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import DarkModeBtn from "./components/DarkModeBtn/DarkModeBtn";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);
  const toggleModalSignUp = () => {
    setIsOpenModalSignUp(!isOpenModalSignUp);
  };
  const toggleModalLogIn = () => {
    setIsOpenModalLogIn(!isOpenModalLogIn);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
        <Navbar
          toggle={toggle}
          isOpenModalSignUp={isOpenModalSignUp}
          toggleModalSignUp={toggleModalSignUp}
          isOpenModalLogIn={isOpenModalLogIn}
          toggleModalLogIn={toggleModalLogIn}
        />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />

        <ModalLogIn
          isOpenModalLogIn={isOpenModalLogIn}
          toggleModalLogIn={toggleModalLogIn}
          isOpenModalSignUp={isOpenModalSignUp}
        />
        <ModalSignUp
          isOpenModalSignUp={isOpenModalSignUp}
          toggleModalSignUp={toggleModalSignUp}
        />
        <DarkModeBtn />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
