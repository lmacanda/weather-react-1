import { RiTempHotLine } from "react-icons/ri";
import "./weatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="weather__temperature">
      <h3>
        <RiTempHotLine className="icon__temperature" />{" "}
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span>
      </h3>
    </div>
  );
}
