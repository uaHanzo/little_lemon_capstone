import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home_page from "./components/Home_page";
import Reserve from "./components/Reserve"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page navigate={navigate} />} />
        <Route path="/reserve" element={<Reserve navigate={navigate} />} />
      </Routes>
    </>
  );
}

export default App;