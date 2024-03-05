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

import photo_1 from "./images/photo_1.png"
import photo_2 from "./images/photo_2.png"
import photo_3 from "./images/photo_3.png"
import photo_4 from "./images/photo_4.png"
import star from "./images/star.png"

import about_photo_1 from "./images/about_photo_1.jpg"
import about_photo_2 from "./images/about_photo_2.jpg"

import footer_logo from "./images/footer_logo.png"

function App() {
  const dish = { dish_1, dish_2, dish_3, delivery_icon };
  const photo = { photo_1, photo_2, photo_3, photo_4, star }
  const about_photo = { about_photo_1, about_photo_2 }
  return (
    <>
      <Header logo_src={logo} />
      <HeroSelection main_photo_src={main_photo} />
      <Highlights dish={dish} />
      <Testimonials photo={photo} />
      <About about_photo={about_photo} />
      <Footer footer_logo={footer_logo} />
    </>
  );
}

export default App;