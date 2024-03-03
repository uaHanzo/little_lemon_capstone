import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './App.css';
// import { ChakraProvider } from "@chakra-ui/react"

import logo from "./images/logo.png"

function App() {
  return (
    <>
      <Header logoSrc={logo} />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;