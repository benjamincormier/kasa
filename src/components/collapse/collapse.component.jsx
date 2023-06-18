import { useState } from "react";

import "./collapse.styles.scss";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const { title, description } = props;

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse__menu">
        <h3 className="collapse__title">{title}</h3>
        <button onClick={toggle}>CLICK</button>
      </div>

      {open && (
        <div className="collapse__details">
          <p className="collapse__description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
