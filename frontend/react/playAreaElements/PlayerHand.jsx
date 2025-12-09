import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./Card.jsx";

export default function PlayerHand() {
  return (
    <div id="playerHand">
      <div className="cardSlots">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
