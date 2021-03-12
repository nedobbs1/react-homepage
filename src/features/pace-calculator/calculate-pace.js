export function calculatePace(timeInSeconds, distanceInMiles) {
  var newPace = timeInSeconds / distanceInMiles;
  var newPaceHours = Math.floor(newPace / 3600);
  var newPaceMinutes = Math.floor(newPace / 60 - newPaceHours * 60);
  var newPaceSeconds = Math.floor(
    newPace - newPaceHours * 3600 - newPaceMinutes * 60
  );

  return {
    hours: newPaceHours,
    minutes: newPaceMinutes,
    seconds: newPaceSeconds,
  };
}
