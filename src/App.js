import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
