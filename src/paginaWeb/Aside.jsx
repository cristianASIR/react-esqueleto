import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicSelect from '../Select';

function Aside() {
  return (
    <aside>
      <BasicSelect />
      <div>
        <iframe
          width="100%"
          height="310"
          src="https://www.youtube.com/embed/m-1X04v8jKo?si=uuR8rB4YFm8IDw4t"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen>

        </iframe>
      </div>

    </aside>
  );
}

// Definir los componentes Home, About y Contact


export default Aside;
