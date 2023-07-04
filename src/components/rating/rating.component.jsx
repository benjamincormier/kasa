import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

import "./rating.styles.scss";

const Rating = ({ stars }) => {
  const totalStars = 5;
  const activeStars = +stars; // string to number
  const inactiveStars = totalStars - activeStars;

  const starsArray = Array(activeStars)
    .fill("*")
    .concat(Array(inactiveStars).fill("-"));

  // starsArray sera de la forme : ['*', '*', '*', '-', '-']

  return (
    <div className="rating">
      {starsArray.map((item, index) =>
        item === "*" ? (
          <img
            className="rating__star"
            key={index}
            src={starActive}
            alt="active star"
          ></img>
        ) : (
          <img
            className="rating__star"
            key={index}
            src={starInactive}
            alt="inactive star"
          ></img>
        )
      )}
    </div>
  );
};

export default Rating;
