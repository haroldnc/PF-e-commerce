import { useState } from "react";



//PAyment Element

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ReactDOM from 'react-dom';

//

import CheckoutForm from "./components/CheckoutForm";

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
import Admin from './pages/Admin/Admin.jsx'
import ServicesDetail from "./pages/ServicesDetail";

import { useSelector, useDispatch } from "react-redux";
import ModalSignOut from "./components/ModalSignOut/ModalSignOut";



 // const stripePromise = loadStripe("pk_test_51L5zjMHq6KUjuv7IIFciLODh9WoDWs5rnmbUrfSZVOfMMWN67dB15Ricdwoi8UNFfuIHL6lgzSTocRXWlYa7aBSA00oP1VlFMI");

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
  const options = {
    // passing the client secret obtained in step 2
    clientSecret: '{{CLIENT_SECRET}}',
    // Fully customizable with appearance API.
    appearance: {/*...*/},

    }

  // console.log(userInfo)


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
          <Route exact path="/admin" component={Admin} />
          <Route path="/posts/detail/:id" component={ServicesDetail}/>
          {/* <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements> */}
          <Route path="/checkout" component={Payment}/>
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
