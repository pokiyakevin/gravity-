import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home/Home";
import About from './About/About';
import './App.css';
import Blog from "./Blog/Blog";
import Portfolio from "./Portfolio/Portfolio";
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      {/* Routing */}

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>

    </>
  );
}

export default App;
