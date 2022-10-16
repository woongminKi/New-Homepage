import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../components/Home';
import Header from '../components/Header';
import IntroduceUs from '../components/IntroduceUs';
import Product from '../components/Product';
import Price from '../components/Price';
import Support from '../components/Support';
import Usage from '../components/Usage';
import Footer from "../components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduceUs" element={<IntroduceUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/price" element={<Price />} />
        <Route path="/support" element={<Support />} />
        <Route path="/usage" element={<Usage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
