import Banner from "../../components/banner/banner.component";
import Gallery from "../../components/gallery/gallery.component";

const Homepage = () => {
  const title = "Chez vous, partout et ailleurs";

  return (
    <div className="homepage">
      <Banner title={title}></Banner>
      <Gallery />
    </div>
  );
};

export default Homepage;
