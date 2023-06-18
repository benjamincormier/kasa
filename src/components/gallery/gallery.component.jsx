import "./gallery.styles.scss";

import GalleryCard from "../gallery-card/gallery-card.component";

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
