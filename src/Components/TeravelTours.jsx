import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TeravelTours = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      price: 700,
      cover: "/image/tour1.svg",
      country: "Melbourne",
      description: "An amazing journey",
      url: "/",
    },
    {
      id: 2,
      price: 600,
      cover: "/image/tour2.svg",
      country: "Paris",
      description: "A Paris Adventure",
      url: "/",
    },
    {
      id: 3,
      price: 350,
      cover: "/image/tour3.svg",
      country: "London",
      description: "London eye adventure",
      url: "/",
    },
    {
      id: 4,
      price: 700,
      cover: "/image/tour4.svg",
      country: "Columbia",
      description: "Amazing streets",
      url: "/",
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
    <section className="p-4 pt-28 md:pt-0 z-0">
      {/* Header */}
      <div className="flex container items-center justify-between mb-4">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl">Fall into travel</h2>
          <p className="text-sm xl:text-base">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <button className="duration-200">
          <Link
            className="text-sm py-2 px-3 hover:bg-primary block duration-200 rounded md:text-base border border-primary active:scale-95 lg:text-lg whitespace-nowrap"
            to="/"
          >
            See All
          </Link>
        </button>
      </div>
      {/* Tours */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:flex-row max-w-[1300px]">
        {tours.map((tour) => {
          return (
            <div key={tour.id} className="grid-cols-1">
              <div className="mx-auto rounded-xl overflow-hidden relative h-[420px] w-full max-w-[296px]">
                <div className="w-full h-full flex flex-col justify-end items-center absolute inset-0 z-10 p-4 select-none">
                  <div className="w-full flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-bold text-2xl">{tour.country}</h3>
                      <p className="text-sm text-gray-400">
                        {tour.description}
                      </p>
                    </div>
                    <span className="font-bold text-2xl">$ {tour.price}</span>
                  </div>
                  <button className="w-full rounded overflow-hidden mt-2">
                    <Link
                      className="text-sm bg-primary py-3 block"
                      to={tour.url}
                    >
                      Book a Hotel
                    </Link>
                  </button>
                </div>
                <span className="block w-full h-full absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent"></span>
                <img
                  className="w-full h-full object-cover"
                  src={tour.cover}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeravelTours;
