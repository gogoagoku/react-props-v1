import React from "react";
import Player from "./Player";
import players from "./Players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex",  margin:"150px"  }}>
      {players.map((el, index) => (
        <Player key={index} {...el} />
      ))}
    </div>
  );
};

export default PlayersList;