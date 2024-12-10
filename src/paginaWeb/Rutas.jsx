import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Tarjeta from "./Cards";

export default function Rutas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nombre" element={<MySkills />} />
        <Route path="/producto/:numero" element={<Producto />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Defensa" element={<Defensa />} /> */}
      </Routes>
    </Router>
  );
}

function Navbar() {
  // visible en cada página
  return ;
}
//Sólo se verá al principio con /
function Home() {
  return ;
}

//Sólo se verá con /about en la URL
function About() {
  return <div>about</div>;
}
function MySkills() {
  return <Tarjeta />
}
// function Defensa() {
//   return <Defensa />
//}

function Producto() {
  //Lectura del parámetro de la URL
  const params = useParams();
  return <h2>Parámetro introducido: {params.numero}</h2>;
}