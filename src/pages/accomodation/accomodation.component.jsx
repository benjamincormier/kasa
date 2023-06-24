import { useParams } from "react-router-dom";
import galleryData from "../../assets/logements.json";

import "./accomodation.styles.scss";

import Collapse from "../../components/collapse/collapse.component";
import Carousel from "../../components/carousel/carousel.component";
import Rating from "../../components/rating/rating.component";
import Tag from "../../components/tag/tag.component";

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
      {/* <img className="accomodation__cover" src={cover} alt={title} /> */}
      <Carousel title={title} pictures={pictures} />

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
          {tags.map((label) => (
            <Tag key={label} label={label} />
          ))}
        </div>
        <Rating stars={rating} />
      </div>
      <div className="flex-row flex-start">
        <div className="collapse-container">
          <Collapse title="Description" details={description} />
        </div>
        <div className="collapse-container">
          <Collapse title="Équipements" details={equipments} />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
