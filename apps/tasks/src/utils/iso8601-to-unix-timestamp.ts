export default function iso8601ToUnixTimestamp(isoString: string) {
  const date = new Date(isoString);
  const timestampInMilliseconds = date.getTime();
  const unixTimestamp = timestampInMilliseconds / 1000;
  return unixTimestamp;
}
