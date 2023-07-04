import { useState } from "react";

import downArrow from "../../assets/arrow-down.svg";

import "./collapse.styles.scss";

const Collapse = (props) => {
  const { title, details } = props;
  let detailsTxt = "";

  // console.log(typeof props.details);

  /* if (typeof props.details === "object") {
    detailsTxt = details.join("<br>");
    console.log(detailsTxt);
  } else {
    detailsTxt = details;
  } */

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(
    `Pour ce composant, props = ${props}, title = ${title} et details = ${detailsTxt}`
  );

  return (
    <div className="collapse">
      <div className="collapse__menu" onClick={toggle}>
        <h3 className="collapse__title">{title}</h3>
        <img
          className={
            isOpen
              ? "collapse__arrow collapse__arrow--down"
              : "collapse__arrow collapse__arrow--up"
          }
          src={downArrow}
          alt=""
        />
      </div>
      <div
        className={
          isOpen ? "collapse__details--open" : "collapse__details--collapsed"
        }
      >
        {typeof details === "object" ? (
          details.map((item) => <p>{item}</p>)
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
