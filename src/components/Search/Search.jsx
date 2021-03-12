import React, { useState, useEffect } from "react";

function Search() {
  const [searchOpen, setSearchOpen] = useState(false);
  // const [searchText, setSearchText] = useState("");

  function keyDownHandler(event) {
    if (event.key === " ") {
      setSearchOpen(true);
    } else if (event.key === "Escape") {
      setSearchOpen(false);
    }
    // else {
    //   setSearchText(event.value);
    // }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div>
      <input
        // value={searchText}
        // onChange={keyDownHandler}
        hidden={searchOpen ? false : true}
        type="text"
        className="search-field"
        name="search-field"
        autoComplete="off"
      />
    </div>
  );
}

export default Search;

//   const searchUrl = "https://google.com/search?q=";
