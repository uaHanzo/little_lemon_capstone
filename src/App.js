import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header"
import HeroSelection from "./components/Hero_section"
import Highlights from "./components/Highlights"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Footer from "./components/Footer"
import Reserve from "./components/Reserve"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const reserve_page = () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<Reserve />);
  }

  return (
    <>
      <Header reserve_page={reserve_page} />
      <HeroSelection reserve_page={reserve_page} />
      <Highlights />
      <Testimonials />
      <About />
      <Footer reserve_page={reserve_page} />
    </>
  );
}

export default App;