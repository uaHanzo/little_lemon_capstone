import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home_page from "./components/Home_page";
import Reserve from "./components/Reserve"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;