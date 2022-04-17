import "./App.scss";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
