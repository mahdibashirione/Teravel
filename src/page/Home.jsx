import Hero from "../Components/Hero";
import PopularSearch from "../Components/PopularSearch";
import Category from "../Components/Category";
import AboutBerand from "../Components/AboutBerand";
import TopTours from "../Components/TopTours";
import QRCodeDiscount from "../Components/QRCodeDiscount";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularSearch />
      <Category />
      <AboutBerand />
      <TopTours />
      <QRCodeDiscount />
    </>
  );
};

export default HomePage;
