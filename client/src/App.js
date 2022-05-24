import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <div>
        <h1>Hola</h1>
        <GlobalStyle/>
      </div>
      <Presentation/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
