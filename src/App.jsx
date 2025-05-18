import "./App.css";
import Features from "./assets/Componenets/Features";
import Header from "./assets/Componenets/Header";
import Navbar from "./assets/Componenets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offer from "./assets/Componenets/Offer";
import About from "./assets/Componenets/About";
import Contact from "./assets/Componenets/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Features />
        <Offer />
        <About />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
