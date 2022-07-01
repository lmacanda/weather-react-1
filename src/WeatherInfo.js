import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon/WeatherIcon";
import WeatherTemperature from "./weatherTemperature/WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather__info">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>

      <div className="image__today">
        <WeatherIcon code={props.data.icon} />
      </div>
      <h4>{props.data.description}</h4>
      <hr />
      <WeatherTemperature celsius={props.data.temperature} />
      <hr />
      <h4>wind: {props.data.wind} Km/h</h4>
      <hr />
      <h4>humidity: {props.data.humidity}%</h4>
      <hr />
    </div>
  );
}
