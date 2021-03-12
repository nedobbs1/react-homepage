import React, { useState } from "react";
import { calculateTime } from "../../features/time-calculator/calculate-time";
import { calculatePace } from "../../features/pace-calculator/calculate-pace";
import { convertTimeToSeconds } from "../../features/time-to-seconds-conversion/time-to-seconds-conversion";
import { calculateDistance } from "../../features/distance-calculator/calculate-distance";

function PaceCalculator() {
  const [distance, setDistance] = useState(0);
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(0);
  const time = convertTimeToSeconds(timeHours, timeMinutes, timeSeconds);
  const [paceHours, setPaceHours] = useState(0);
  const [paceMinutes, setPaceMinutes] = useState(0);
  const [paceSeconds, setPaceSeconds] = useState(0);
  const pace = convertTimeToSeconds(paceHours, paceMinutes, paceSeconds);
  const [isExpanded, setExpanded] = useState(false);

  function handleResetClick(event) {
    event.preventDefault();
    setDistance(0);
    setTimeHours(0);
    setTimeMinutes(0);
    setTimeSeconds(0);
    setPaceHours(0);
    setPaceMinutes(0);
    setPaceSeconds(0);
  }

  function handleCalculateClick(event) {
    event.preventDefault();
    if (distance === 0) {
      const { distance } = calculateDistance(time, pace);
      setDistance(distance);
    } else if (time === 0) {
      const { hours, minutes, seconds } = calculateTime(pace, distance);
      setTimeHours(hours);
      setTimeMinutes(minutes);
      setTimeSeconds(seconds);
    } else if (pace === 0) {
      const { hours, minutes, seconds } = calculatePace(time, distance);
      setPaceHours(hours);
      setPaceMinutes(minutes);
      setPaceSeconds(seconds);
    }
  }

  function handleExpandClick() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="tool">
      <p onClick={handleExpandClick}>Pace Calculator</p>
      <form className="pace-calculator" hidden={isExpanded ? false : true}>
        <div className="half-block">
          <h1>Distance</h1>
          <h1>Time</h1>
          <h1>Pace</h1>
        </div>
        <div className="half-block">
          <input
            value={distance}
            onChange={(event) => setDistance(+event.target.value)}
            type="number"
            autoComplete="off"
            name="distance"
          />
          <label htmlFor="distance">miles</label>
          <br />
          <input
            value={timeHours}
            onChange={(event) => setTimeHours(+event.target.value)}
            type="number"
            autoComplete="off"
            name="timeHours"
          />
          <label htmlFor="timeHours">h</label>
          <input
            value={timeMinutes}
            onChange={(event) => setTimeMinutes(+event.target.value)}
            type="number"
            autoComplete="off"
            name="timeMinutes"
            max="59"
          />
          <label htmlFor="timeMinutes">m</label>
          <input
            value={timeSeconds}
            onChange={(event) => setTimeSeconds(+event.target.value)}
            type="number"
            autoComplete="off"
            name="timeSeconds"
            max="59"
          />
          <label htmlFor="timeSeconds">s</label>
          <br />
          <input
            value={paceHours}
            onChange={(event) => setPaceHours(+event.target.value)}
            type="number"
            autoComplete="off"
            name="paceHours"
          />
          <label htmlFor="paceHours">h</label>
          <input
            value={paceMinutes}
            onChange={(event) => setPaceMinutes(+event.target.value)}
            type="number"
            autoComplete="off"
            name="paceMinutes"
            max="59"
          />
          <label htmlFor="paceMinutes">m</label>
          <input
            value={paceSeconds}
            onChange={(event) => setPaceSeconds(+event.target.value)}
            type="number"
            autoComplete="off"
            name="paceSeconds"
            max="59"
          />
          <label htmlFor="paceSeconds">s</label>
          <br />
        </div>
        <div className="buttons">
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={handleResetClick}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default PaceCalculator;
