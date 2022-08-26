import React from "react";
import { Analytics } from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/navBar";
import Newsletter from "./component/Newsletter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
