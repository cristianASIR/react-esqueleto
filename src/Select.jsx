
  import React, {useState} from 'react';
  import heroes from './heroes.json';
  function SuperheroSelect() {
    const [selectedHero, setSelectedHero] = useState(""); // Estado para el héroe seleccionado
  
    // Filtramos los héroes 
    const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");
  
    const handleChange = (event) => {
      setSelectedHero(event.target.value); // Actualiza el estado al cambiar la selección
    };
  
    return (
      <div>
        <select value={selectedHero} onChange={handleChange}>
          <option value="">Seleccione un héroe</option>
          {marvelHeroes.map(hero => (
            <option key={hero.superhero} value={hero.superhero}>
              {hero.superhero} ({hero.publisher})
            </option>
          ))}
        </select>
  
      </div>
    );
  }
  
  export default SuperheroSelect;

