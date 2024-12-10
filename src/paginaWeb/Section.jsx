import React from 'react'
import './section.module.css'
import Tarjeta from './Cards';
import Fotos from './Galeria';
import Defensa from './Defensa';

function Section() {
  const noticiasData = [
    { title:"titulo", text: "This is card 1" }
  ];
  return (
    <section style={{ padding: '20px' }}>
      <div style={{ display: 'flex',  justifyContent: 'center', flexWrap: 'nowrap', marginTop: '20px' }}>
        {noticiasData.map((noticias, index) => (
          //En esta inserción de tarjetas se pueden utilizar tanto "Fotos" como "Tarjeta" para comprobar las diferencias de tipo de tarjetas
          <Defensa key={index} title={noticias.titulo} />
        ))}
      </div>
    </section>);
}

export default Section 