import "./App.css";
import Features from "./Componenets/Features";
import Header from "./Componenets/Header";
import Navbar from "./Componenets/Navbar";
import Offer from "./Componenets/Offer";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Offer />
      <About />
      <Contact />
    </>
  );
}

export default App;
