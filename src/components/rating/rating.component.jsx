import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

import "./rating.styles.scss";

const Rating = ({ stars }) => {
  const numberOfStars = +stars; // string to number
  const totalStars = 5;
  const activeStars = numberOfStars;
  const inactiveStars = totalStars - activeStars;

  return (
    <div className="rating">
      {Array(activeStars)
        .fill(undefined)
        .map((_, index) => (
          <img
            key={`active-star-${index}`}
            src={starActive}
            alt="active star"
          />
        ))}
      {Array(inactiveStars)
        .fill(undefined)
        .map((_, index) => (
          <img
            key={`inactive-star-${index}`}
            src={starInactive}
            alt="inactive star"
          />
        ))}
    </div>
  );
};

export default Rating;
