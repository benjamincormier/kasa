import { Link } from "react-router-dom";

import "./gallery-card.styles.scss";

const GalleryCard = ({ item }) => (
  <div className="gallery-card">
    <Link to={`/accomodation/${item.id}`} className="header__link">
      <img className="gallery-card__img" src={item.cover} alt={item.title} />
      <h3 className="gallery-card__title">{item.title}</h3>
    </Link>
  </div>
);

export default GalleryCard;
