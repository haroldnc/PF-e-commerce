import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";

import Services from './pages/Services/Services'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
// import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import ModalLogIn from "./components/ModalLogIn/ModalLogIn";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModalSignUp from "./components/ModalSignUp/ModalSignUp";
import DarkModeBtn from "./components/DarkModeBtn/DarkModeBtn";
import { useDarkMode } from "./Hooks/useDarkMode";
import WorkerProfile from "./pages/WorkerProfile";
import PublishService from "./pages/PublishService/PublishService";
import ServicesDetail from "./pages/ServicesDetail";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const themeMode = theme === 'light' ? 'light' : 'dark';

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
      <ThemeProvider theme={themes[themeMode]}>
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
          <Route exact path="/servicios/:id" component={Services} />
          <Route exact path="/categoria/:id" component={Categories} />
          <Route path="/worker/:id" component={WorkerProfile} />
          <Route path="/publicar" component={PublishService} />
          <Route path="/posts/detail/:id" component={ServicesDetail}/>
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
        <DarkModeBtn theme={theme} setTheme={setTheme}/>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
