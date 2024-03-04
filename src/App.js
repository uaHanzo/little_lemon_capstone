import Header from "./components/Header"
import HeroSelection from "./components/Hero_section"
import Highlights from "./components/Highlights"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Footer from "./components/Footer"
import './App.css';
// import { ChakraProvider } from "@chakra-ui/react"

import logo from "./images/logo.png"
import main_photo from "./images/main_photo.jpg"
import dish_1 from "./images/bruchetta.png"
import dish_2 from "./images/greek_salad.jpg"
import dish_3 from "./images/lemon_dessert.jpg"
import delivery_icon from "./images/delivery_icon.png"

function App() {
  const dish = { dish_1, dish_2, dish_3, delivery_icon };

  return (
    <>
      <Header logo_src={logo} />
      <HeroSelection main_photo_src={main_photo} />
      <Highlights dish={dish} />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;