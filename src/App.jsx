import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PortfolioR from "./components/PortfolioGif";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <PortfolioR></PortfolioR>
      <Contact></Contact>
    </>
  );
}

export default App;
