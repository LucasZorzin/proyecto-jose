import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/NavBar/Navbar";
import Proyectos from "./screens/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/proyectos/:idProyectos" element={<Proyectos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
