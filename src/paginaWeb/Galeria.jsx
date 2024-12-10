import React from 'react';

function Fotos() {
  const images = [
    "https://d.furaffinity.net/art/vazerwolf894/1646639798/1646639798.vazerwolf894_untitled5-3.jpg",
    "https://s0.smartresize.com/wallpaper/584/480/HD-wallpaper-3-tomoe-sharingan-eye-symbol.jpg",
    "https://cdn.pixabay.com/photo/2021/02/25/14/12/rinnegan-6049194_1280.png",
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px' }}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Naruto ${index + 1}`} style={{ width: '150px', height: '150px', margin: '10px', objectFit: 'cover' }} />
      ))}
    </div>
  );
}

export default Fotos;
