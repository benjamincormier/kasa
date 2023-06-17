import "./gallery-card.styles.scss";

const GalleryCard = ({ item }) => (
  <div className="gallery-card">
    <img className="gallery-card__img" src={item.cover} alt={item.title} />
    <h3 className="gallery-card__title">{item.title}</h3>
  </div>
);

export default GalleryCard;
