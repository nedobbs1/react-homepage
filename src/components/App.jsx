import React from "react";
import Clock from "./Clock/Clock";
import Toolbar from "./Tools/Toolbar";
import Search from "./Search/Search";
// import Weather from "./Weather/Weather";

function App() {
  return (
    <div>
      <div className="container">
        <Search />
        <Clock />
        {/* <Weather /> */}
      </div>
      <div className="bottom-bar">
        <Toolbar />
      </div>
    </div>
  );
}

export default App;

// tools - theme toggle, dark mode, pace calc
// weather
// search
// task list or google task api
// google calendar api
// strava feed api
// workflow page openers (ie open a bunch of related pages to start working... "code: open github, udemy, slack, etc")
