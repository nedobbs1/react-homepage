import React, { useState } from "react";
import PaceCalculator from "./PaceCalculator";
import ThemeToggle from "./theme-toggle";

function Toolbar() {
  const [isExpanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="toolbar">
      <p onClick={handleClick}>Tools</p>
      <div hidden={isExpanded ? false : true}>
        <PaceCalculator />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Toolbar;
