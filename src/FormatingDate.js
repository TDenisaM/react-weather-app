export default function FormatingDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = String(props.date.getHours()).padStart(2, "0");
  let minutes = String(props.date.getMinutes()).padStart(2, "0");

  return `${day}, ${hours}:${minutes}`;
}
