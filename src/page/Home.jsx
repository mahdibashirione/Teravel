import Hero from "../Components/Hero";
import PopularSearch from "../Components/PopularSearch";
import Category from "../Components/Category";
import AboutBerand from "../Components/AboutBerand";
import TopTours from "../Components/TopTours";
import QRCodeDiscount from "../Components/QRCodeDiscount";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularSearch />
      <Category />
      <AboutBerand />
      <TopTours />
      <QRCodeDiscount />
      <Footer />
    </>
  );
};

export default HomePage;
