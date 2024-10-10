import styles from "../page.module.css";
import WeatherIcon from "./WeatherIcon";

// rgba(62, 150 , 225
export default function WeatherCard({
  city,
  currentTemperature,
  highTemperature,
  lowTemperature,
  cloudiness,
  humidity,
  windSpeed,
  weatherType,
}) {
  return (
    <div
      className={styles.weather_card}
      style={{ backgroundColor: `rgba(110, 199 , 243 , 0.${cloudiness})` }}
    >
      <div className={styles.top_section}>
        <h2>{city}</h2>
        <p> {weatherType} </p>
      </div>

      {/* Icon and Temperature Div */}
      <div className={styles.middle_section}>
        <WeatherIcon weatherType={weatherType} />
        <p className={styles.temperature_text}>
          {Math.round(currentTemperature)}°F
        </p>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.detail_box}>
          <div className={styles.detail_label}>HIGH</div>
          <div className={styles.detail_value}>
            {Math.round(highTemperature)}°F
          </div>
        </div>
        <div className={styles.detail_box}>
          <div className={styles.detail_label}>LOW</div>
          <div className={styles.detail_value}>
            {Math.round(lowTemperature)}°F
          </div>
        </div>
        <div className={styles.detail_box}>
          <div className={styles.detail_label}>CLOUDINESS</div>
          <div className={styles.detail_value}>{cloudiness}%</div>
        </div>
        <div className={styles.detail_box}>
          <div className={styles.detail_label}>HUMIDITY</div>
          <div className={styles.detail_value}>{humidity}%</div>
        </div>
        <div className={styles.detail_box}>
          <div className={styles.detail_label}>WIND</div>
          <div className={styles.detail_value}>{windSpeed} mph</div>
        </div>
      </div>
    </div>
  );
}
