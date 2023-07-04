import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/logements.json";

import "./accomodation.styles.scss";

import Collapse from "../../components/collapse/collapse.component";
import Carousel from "../../components/carousel/carousel.component";
import Rating from "../../components/rating/rating.component";
import Tag from "../../components/tag/tag.component";

const Accomodation = () => {
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    const result = data.find((item) => item.id === id);
    setAccomodation(result);
  }, [id]);

  if (!accomodation) {
    return null;
  }

  return accomodation ? (
    <div className="accomodation">
      <Carousel title={accomodation.title} pictures={accomodation.pictures} />
      <div className="accomodation__flex-container">
        <div className="accomodation__details accomodation__details-left">
          <div className="accomodation__name">
            <h1 className="accomodation__title">{accomodation.title}</h1>
            <h2 className="accomodation__location">{accomodation.location}</h2>
          </div>
          <div className="accomodation__tags">
            {accomodation.tags.map((label) => (
              <Tag key={label} label={label} />
            ))}
          </div>
        </div>

        <div className="accomodation__details accomodation__details-right">
          <div className="accomodation__host">
            <h3 className="accomodation__host-name">
              {accomodation.host.name}
            </h3>
            <img
              className="accomodation__host-picture"
              src={accomodation.host.picture}
              alt={accomodation.host.name}
            />
          </div>
          <Rating stars={accomodation.rating} />
        </div>
      </div>
      <div className="accomodation__collapses-container">
        <div className="accomodation__collapse-container">
          <Collapse title="Description" details={accomodation.description} />
        </div>
        <div className="accomodation__collapse-container">
          <Collapse title="Équipements" details={accomodation.equipments} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Accomodation;
