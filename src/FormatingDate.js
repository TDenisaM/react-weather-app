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
  let day = days[props.currentDate.getDay()];
  let hours = String(props.currentDate.getHours()).padStart(2, "0");
  let minutes = String(props.currentDate.getMinutes()).padStart(2, "0");

  return `${day}, ${hours}:${minutes}`;
}
