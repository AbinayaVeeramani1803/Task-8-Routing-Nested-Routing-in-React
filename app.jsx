import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import Services from "./Services";
import WebDevelopment from "./WebDevelopment";
import AppDevelopment from "./AppDevelopment";
import UIUXDesign from "./UIUXDesign";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>React Routing & Nested Routing</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />}>
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="uiux-design" element={<UIUXDesign />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
