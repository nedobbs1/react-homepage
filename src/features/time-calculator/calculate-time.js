export function calculateTime(paceInSeconds, distanceInMiles) {
  var newTime = distanceInMiles * paceInSeconds;
  var newTimeHours = Math.floor(newTime / 3600);
  var newTimeMinutes = Math.floor(newTime / 60 - newTimeHours * 60);
  var newTimeSeconds = Math.floor(
    newTime - newTimeHours * 3600 - newTimeMinutes * 60
  );

  return {
    hours: newTimeHours,
    minutes: newTimeMinutes,
    seconds: newTimeSeconds,
  };
}
