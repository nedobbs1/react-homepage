export function calculateDistance(timeInSeconds, paceInSeconds) {
  var newDistance = timeInSeconds / paceInSeconds;
  return newDistance.toFixed(1);
}
