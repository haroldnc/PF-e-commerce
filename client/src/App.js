import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import { themes } from "../src/styles/themes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <div>
        <h1>Hola</h1>
        <GlobalStyle/>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
