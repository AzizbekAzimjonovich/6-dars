import './App.css';
import Navbar from './navbar/Navbar.jsx';
import Main from './main/Main.jsx';
import About from './about/About.jsx';
import LearnMore from './main/LearnMore';
import Contact from './contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foods/:id" element={<LearnMore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
