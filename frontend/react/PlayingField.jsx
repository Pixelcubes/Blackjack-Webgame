import DealerHand from "./playAreaElements/DealerHand.jsx";
import Deck from "./playAreaElements/Deck.jsx";
import PlayerUI from "./playAreaElements/PlayerUI.jsx";
import PlayerHand from "./playAreaElements/PlayerHand.jsx";

export default function PlayingField() {
  return (
    <div id="playingField">
      <DealerHand />
      <Deck />
      <PlayerUI />
      <PlayerHand />
    </div>
  );
}
