import Banner from "../../components/banner/banner.component";

const Homepage = () => {
  const title = "Chez vous, partout et ailleurs";

  return (
    <div className="homepage">
      <Banner title={title}></Banner>
      <p>gallery</p>
    </div>
  );
};

export default Homepage;
