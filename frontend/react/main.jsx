import React from "react";
import ReactDOM from "react-dom/client";

export default function Main() {
  return (
    <div id="main">
        Ronet-san, nani ga suki?!
    </div>
  );
}

// Main() runner
ReactDOM.createRoot(document.querySelector("body")).render(<Main />);