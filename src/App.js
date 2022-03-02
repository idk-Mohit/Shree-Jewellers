import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, ScrollUpbutton } from "./components/index";
import {
  Home,
  About,
  Contacts,
  Products,
  Price,
  Gallery,
} from "./Container/index";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contacts" element={<Contacts />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Price" element={<Price />} />
        <Route exact path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <ScrollUpbutton />
    </Router>
  );
}

export default App;
