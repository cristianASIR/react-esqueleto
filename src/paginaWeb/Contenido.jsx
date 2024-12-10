import React from 'react'
import Nav from './Nav'
import Section from './Section'
import Aside from './Aside'
import './contenido.module.css'
import Rutas from './Rutas'

function Contenido() {
  return (
    <>
      <Nav />
      <main>
        <Aside />
        <section>
        {<Section/> }
          <Rutas />
        </section>
      </main>
    </>
  )
}

export default Contenido
