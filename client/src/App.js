import { useState } from "react";



//PAyment Element

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

//

import CheckoutForm from "./components/PaymentComponent";

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



// const stripePromise = loadStripe('pk_test_wk6O7Cc5k3McBIG2Hut2irGs');

function App() {
  const userSignIn = useSelector((state) => state.userSignIn);
  const {userInfo} = userSignIn;

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

  // const options = {
  //   // passing the client secret obtained in step 2
  //   clientSecret: '{{CLIENT_SECRET}}',
  //   // Fully customizable with appearance API.
  //   appearance: {/*...*/},
  // };

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
        {/* <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements> */}
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
