import { useState, useEffect } from "react";

import "./gallery.styles.scss";

import galleryData from "../../assets/logements.json";
import GalleryCard from "../gallery-card/gallery-card.component";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(galleryData);
  });

  return (
    <div className="gallery">
      {gallery.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
