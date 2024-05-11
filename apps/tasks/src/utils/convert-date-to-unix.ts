export default function convertDateToUnix(date: Date): number {
  return +parseInt((date.getTime() / 1000).toFixed(0));
}
