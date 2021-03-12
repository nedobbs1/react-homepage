export function convertTimeToSeconds(hours, minutes, seconds) {
  const time = hours * 3600 + minutes * 60 + seconds;

  return time;
}
