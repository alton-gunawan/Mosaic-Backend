export default function getSecondsAndNanos(date) {
  // Get milliseconds since Unix epoch (seconds * 1000 + milliseconds)
  const timestampInMilliseconds = date.getTime();

  // Extract seconds
  const seconds = Math.floor(timestampInMilliseconds / 1000);

  // Calculate milliseconds within the current second
  const milliseconds = timestampInMilliseconds % 1000;

  // Estimate nanos (assuming milliseconds represent the start of the millisecond window)
  const nanos = Math.round(milliseconds * 1000000);

  return { seconds, nanos };
}
