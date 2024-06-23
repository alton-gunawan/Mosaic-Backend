import { Duration } from '../protos/google/protobuf/duration';

function numberToDuration(number: number): Duration {
  // Extract integer part (seconds)
  let seconds = Math.floor(number);

  // Extract decimal part (assuming it represents nanoseconds)
  let nanos = Math.round((number % 1) * 1e9); // Convert to nanoseconds (multiply by 1 billion)

  // Handle negative values
  if (number < 0) {
    seconds = -seconds;
    nanos = -nanos;
  }

  return { seconds, nanos };
}

function durationToNumber(duration: Duration): number {
  return duration.seconds + duration.nanos / 1e9;
}

export { numberToDuration, durationToNumber };
