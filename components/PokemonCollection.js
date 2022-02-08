import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeObj}) {



 const pokemon = pokeObj.map(poke => {return <PokemonCard sprites={poke.sprites} key={poke.id} id={poke.id} name={poke.name} hp={poke.hp} /> })

  return (
    <Card.Group itemsPerRow={6} >
      {pokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
