import { useState, useEffect } from "react";

import "./homepage.styles.scss";

import logements from "../../assets/logements.json";

import Banner from "../../components/banner/banner.component";
import Gallery from "../../components/gallery/gallery.component";

const Homepage = () => {
  const title = "Chez vous, partout et ailleurs";

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logements);
  }, []);

  return (
    <div className="homepage">
      <Banner title={title}></Banner>
      <Gallery data={data} />
    </div>
  );
};

export default Homepage;
