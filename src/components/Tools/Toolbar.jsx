import React, { useState } from "react";
import PaceCalculator from "./PaceCalculator";

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
      </div>
    </div>
  );
}

export default Toolbar;
