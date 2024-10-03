export default function WeatherCard({
  city,
  currentTemperature,
  highTemperature,
  lowTemperature,
  cloudiness,
  humidity,
  windSpeed,
}) {
  return (
    <div>
      <h2>{city}</h2>
      <p> Current Temperature: {currentTemperature}</p>
      <p> High Temperature: {highTemperature} </p>
      <p> Low Temperature : {lowTemperature}</p>
      <p> Cloudiness: {cloudiness} </p>
      <p> Humidity: {humidity} </p>
      <p> Wind Speed: {windSpeed} </p>
    </div>
  );
}
