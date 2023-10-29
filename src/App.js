import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Contact from './Contact';
import Footer from './Footer';
import Header from "./Header";
import Aboutus from "./Aboutus";

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes >
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  </>
  );
}

export default App;
