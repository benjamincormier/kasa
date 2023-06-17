import { useParams } from "react-router-dom";
import galleryData from "../../assets/logements.json";

import "./accomodation.styles.scss";

const Accomodation = () => {
  const { id } = useParams();
  const selectedAccomodation = galleryData.find((item) => item.id === id);

  const {
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = selectedAccomodation;
  return (
    <div className="accomodation">
      <img className="accomodation__cover" src={cover} alt={title} />

      <div className="flex-row">
        <div className="accomodation__name">
          <h1 className="accomodation__title">{title}</h1>
          <h2 className="accomodation__location">{location}</h2>
        </div>
        <div className="accomodation__host">
          <h3 className="accomodation__host-name">{host.name}</h3>
          <img
            className="accomodation__host-picture"
            src={host.picture}
            alt={host.name}
          />
        </div>
      </div>

      <div className="flex-row">
        <div className="accomodation__tags">
          {tags.map((tag) => (
            <p className="accomodation__tag">{tag}</p>
          ))}
        </div>
        <div className="accomodation__rating">{rating}</div>
      </div>
    </div>
  );
};

export default Accomodation;
