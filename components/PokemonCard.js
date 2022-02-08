import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {

  const [ changeImage, setChangeImage ] = useState(true)

  function handleClick() {
    setChangeImage(changeImage => !changeImage)
  }

  return (
    <Card >
      <div onMouseOver={handleClick}>
        <div className="image">
          <img alt="oh no!" src={changeImage ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
