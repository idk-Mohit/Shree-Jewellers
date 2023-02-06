import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, ScrollUpbutton } from "./components/index";
import {
  Home,
  About,
  Contacts,
  Products,
  Gallery,
  NotFound,
} from "./Container/index";
import ScrollTotop from "./Hooks/ScrollTotop";
import Loader from "./UI/Loader";

function App() {
  return (
    <Router>
      <Header />
      <ScrollTotop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollUpbutton />
    </Router>
  );
}

export default App;
