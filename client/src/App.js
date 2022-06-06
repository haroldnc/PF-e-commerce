import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";

import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
// import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import ModalLogIn from "./components/ModalLogIn/ModalLogIn";
import Payment from "./pages/Purchase/Purchase";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import DarkModeBtn from "./components/DarkModeBtn/DarkModeBtn";
import { useDarkMode } from "./Hooks/useDarkMode";
import WorkerProfile from "./pages/WorkerProfile";
import PublishService from "./pages/PublishService/PublishService";
import { useSelector, useDispatch } from "react-redux";
import ModalSignOut from "./components/ModalSignOut/ModalSignOut";

function App() {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const themeMode = theme === "light" ? "light" : "dark";

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState(false);
  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);
  const [isOpenModalSignOut, setIsOpenModalSignOut] = useState(false);

  const toggleModalSignUp = () => {
    setIsOpenModalSignUp(!isOpenModalSignUp);
  };
  const toggleModalLogIn = () => {
    setIsOpenModalLogIn(!isOpenModalLogIn);
  };
  const toggleModalSignOut = () => {
    setIsOpenModalSignOut(!isOpenModalSignOut);
  };

  console.log(userInfo);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[themeMode]}>
        <Navbar
          toggle={toggle}
          isOpenModalSignUp={isOpenModalSignUp}
          toggleModalSignUp={toggleModalSignUp}
          isOpenModalLogIn={isOpenModalLogIn}
          toggleModalLogIn={toggleModalLogIn}
          isOpenModalSignOut={isOpenModalSignOut}
          toggleModalSignOut={toggleModalSignOut}
          userInfo={userInfo}
        />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/servicios/:id" component={Services} />
          <Route exact path="/categoria/:id" component={Categories} />
          <Route path="/worker/:id" component={WorkerProfile} />
          <Route path="/compra/:id" component={Payment} />
          <Route path="/publicar" component={PublishService} />
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
        <ModalSignOut
          isOpenModalSignOut={isOpenModalSignOut}
          toggleModalSignOut={toggleModalSignOut}
        />

        <DarkModeBtn theme={theme} setTheme={setTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
