import ReactDOM from "react-dom/client";

import PlayingField from "./PlayingField.jsx";
import SideMargins from "./SideMargins.jsx";
import PlayerUI from "./playAreaElements/PlayerUI.jsx";

export default function Main() {
  return (
    <div id="main">
        <SideMargins />
        <PlayingField />
        <SideMargins />
    </div>
  );
}

// Main() runner
ReactDOM.createRoot(document.querySelector("body")).render(<Main />);