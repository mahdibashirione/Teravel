import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const [featureData, setFeatureData] = useState([
    {
      id: 1,
      cover: "/image/FFlights.svg",
      title: "Flights",
      description:
        "Search Flights & Places Hire to our most popular destinations",
      url: "/flights",
    },
    {
      id: 2,
      cover: "/image/FHotels.svg",
      title: "Hotels",
      description:
        "Search hotels & Places Hire to our most popular destinations",
      url: "/hotels",
    },
  ]);
  const container = useRef();
  const isInView = useInView(container);

  const animateContaier = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const animateItems = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section className="p-4 pt-28 md:pt-0">
      <div className="container flex flex-col items-center md:items-stretch gap-4 md:flex-row">
        {featureData.map((feature) => {
          return (
            <div
              key={feature.id}
              className="flex-1 flex flex-col justify-end items-center relative max-w-[350px] md:max-w-none rounded-[20px] overflow-hidden"
            >
              <div className="w-full h-full flex flex-col justify-end items-center absolute inset-0 z-10 pb-8 select-none">
                <h2 className="text-white font-bold text-4xl lg:text-5xl xl:text-6xl">
                  {feature.title}
                </h2>
                <p className="text-white text-sm text-center mt-2 md:text-base max-w-[400px] xl:mt-4">
                  {feature.description}
                </p>
                <button>
                  <Link
                    className="text-sm bg-primary py-2 px-4 flex items-center gap-2 rounded md:text-base active:scale-95 duration-200 lg:text-lg mt-6 xl:mb-8 xl:mt-10"
                    to={feature.url}
                  >
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1716 1.83039C22.0182 1.67706 21.8238 1.57132 21.6118 1.52591C21.3997 1.4805 21.179 1.49736 20.9763 1.57445L2.2249 8.6718H2.22115C2.00494 8.75495 1.81968 8.90282 1.69066 9.09521C1.56163 9.2876 1.49515 9.51513 1.50028 9.74672C1.5054 9.97831 1.5819 10.2027 1.71931 10.3892C1.85672 10.5756 2.04835 10.7152 2.26802 10.7887L2.28724 10.7948L8.72318 13.543C8.84871 13.5812 8.98204 13.5857 9.10986 13.5561C9.23768 13.5266 9.35552 13.4641 9.45162 13.3748L19.781 3.74992C19.8118 3.71914 19.8483 3.69473 19.8885 3.67807C19.9287 3.66142 19.9718 3.65284 20.0154 3.65284C20.0589 3.65284 20.102 3.66142 20.1422 3.67807C20.1824 3.69473 20.219 3.71914 20.2497 3.74992C20.2805 3.7807 20.3049 3.81724 20.3216 3.85746C20.3382 3.89767 20.3468 3.94077 20.3468 3.9843C20.3468 4.02783 20.3382 4.07093 20.3216 4.11114C20.3049 4.15136 20.2805 4.18789 20.2497 4.21867L10.6244 14.5434C10.5351 14.6395 10.4726 14.7573 10.4431 14.8851C10.4135 15.0129 10.418 15.1463 10.4561 15.2718L13.2054 21.7115C13.2082 21.7209 13.211 21.7293 13.2143 21.7382C13.3643 22.1727 13.744 22.4793 14.2029 22.4999H14.2497C14.4814 22.5012 14.7081 22.4328 14.9004 22.3036C15.0927 22.1744 15.2416 21.9903 15.3279 21.7752L22.4243 3.02899C22.5025 2.82615 22.5202 2.605 22.4754 2.39229C22.4305 2.17957 22.325 1.98441 22.1716 1.83039Z"
                        fill="black"
                      />
                    </svg>{" "}
                    show {feature.title}
                  </Link>
                </button>
              </div>
              <span className="block w-full h-full absolute inset-0 bg-gradient-to-t from-zinc-950"></span>
              <img
                className="w-full h-full object-cover"
                src={feature.cover}
                alt=""
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
