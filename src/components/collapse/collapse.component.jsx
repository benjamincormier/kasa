import { useState } from "react";

import downArrow from "../../assets/arrow-down.svg";

import "./collapse.styles.scss";

const Collapse = (props) => {
  const { title, details } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
          isOpen
            ? "collapse__details collapse__details--open"
            : "collapse__details collapse__details--collapsed"
        }
      >
        {typeof details === "object" ? (
          details.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
