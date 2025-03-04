import { Link } from "react-router-dom";
import style from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesProvider";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${style.cityItem} ${
          id === currentCity.id ? style["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={style.emoji}>{emoji}</span>
        <h3 className={style.name}>{cityName}</h3>
        <time className={style.date}>({formatDate(date)})</time>
        <button className={style.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
