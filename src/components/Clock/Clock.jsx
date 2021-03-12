import React, { useState } from "react";

function Clock() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const [time, setTime] = useState(now.toLocaleTimeString("en-GB"));
  const slogan = getSlogan();

  function getSlogan() {
    if (day === "Sunday") {
      return "Easy like ";
    } else if (day === "Friday" || day === "Saturday") {
      return "Hell yea! ";
    } else {
      return "A fuckin ";
    }
  }

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div>
      <div className="clock">{month + " " + date + " - " + slogan + day}</div>
      <div className="clock">{time}</div>
    </div>
  );
}

export default Clock;
