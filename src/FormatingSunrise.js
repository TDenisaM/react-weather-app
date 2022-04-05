export default function FormatingSunrise(props) {
  let hours = String(props.sunrise.getHours()).padStart(2, "0");
  let minutes = String(props.sunrise.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
