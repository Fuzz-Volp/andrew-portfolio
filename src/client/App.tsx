import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Admin, Art, Contact, Games, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
