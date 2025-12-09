import React from "react";
import ReactDOM from "react-dom/client";

export default function PlayerUI() {
  return (
    <div id="playerUi">
      <div id="playerCapital">
        Capital: 1000 VBux
      </div>
      <div id="betAmount">
        Bet Amount: 0 VBux
      </div>
      <div id="hitBtn">
        Hit   
      </div>
      <div id="standBtn">
        Stand
      </div>
    </div>
  );
}
