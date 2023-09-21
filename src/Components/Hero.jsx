import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <section className="container relative px-4 md:mb-[64px] mb-[52px]">
      <div
        className="max-w-6xl mx-auto bg-gradient-to-b 
      from-[#FFBEBE]/40 to-[#B5D2FF] px-12 pt-6 lg:pt-8 rounded-[32px] md:rounded-[48px] lg:rounded-[64px] xl:rounded-[72px]"
      >
        <span className="text-sm md:text-base xl:text-lg text-primary text-center block">
          Travel.int is all you need
        </span>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center my-4 md:mt-6">
          Explore The World
        </h1>
        <img className="mx-auto" src="/image/hero.svg" loading="lazy" alt="" />
      </div>
      <SearchBox />
    </section>
  );
};

export default Hero;
