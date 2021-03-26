import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isTheme, setTheme] = useState("theme-default");
  const [isExpanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!isExpanded);
  }

  useEffect(() => {
    document.body.classList.add(isTheme);
    return function cleanUp() {
      document.body.classList.remove(isTheme);
    };
  }, [isTheme]);

  function handleThemeClick(event) {
    setTheme(event.target.className);
  }

  return (
    <div className="tool">
      <p onClick={handleExpandClick}>Themes</p>
      <div hidden={isExpanded ? false : true} className="theme-toggle">
        <div className="theme-card">
          <div onClick={handleThemeClick} className="theme-light">
            Light
          </div>
        </div>
        <div className="theme-card">
          <div onClick={handleThemeClick} className="theme-dark">
            Dark
          </div>
        </div>
        <div className="theme-card">
          <div onClick={handleThemeClick} className="theme-passion">
            Passion
          </div>
        </div>
        <div className="theme-card">
          <div onClick={handleThemeClick} className="theme-default">
            Default
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
