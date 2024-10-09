import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../page.module.css";

import {
  faBolt,
  faCloud,
  faUmbrella,
  faSun,
  faSmog,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({ weatherType }) {
  console.log(weatherType);
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} className={styles.weather_icon} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} className={styles.weather_icon} />;
    case "Haze":
      return <FontAwesomeIcon icon={faSmog} className={styles.weather_icon} />;
    case "Rain":
      return (
        <FontAwesomeIcon icon={faUmbrella} className={styles.weather_icon} />
      );

    case "Thunderstorm":
      return <FontAwesomeIcon icon={faBolt} className={styles.weather_icon} />;
    case "Snow":
      return (
        <FontAwesomeIcon icon={faSnowflake} className={styles.weather_icon} />
      );
    default:
      return <FontAwesomeIcon icon={faCloud} className={styles.weather_icon} />;
  }
}
