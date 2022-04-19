import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
