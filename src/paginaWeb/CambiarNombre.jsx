import React, { useState } from 'react';

export const CambairNombre = () => {
 const [nombre,setNombre]=useState("Cristian");
 const cambiarNombre=(nuevoNombre) =>{
setNombre(nuevoNombre);
 }
 return (
 <>
 <h1>Mi nombre es: {nombre}</h1>
 <button onClick={e => cambiarNombre("otronombre")}>Boton2</button>
 </>
 );
};
