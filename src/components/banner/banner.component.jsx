import "./banner.styles.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{props.title}</h1>
    </div>
  );
};

export default Banner;
