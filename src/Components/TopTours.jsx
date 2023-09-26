import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopTours = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 2,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 3,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 4,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 5,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 6,
      image: "/image/tours/2.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 7,
      image: "/image/tours/1.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
    {
      id: 8,
      image: "/image/tours/2.svg",
      url: "/",
      title: "Snow Forest",
      description: "Taste the cold and beauty of the Russian forest in winter",
      pricePerson: 180,
      location: "NYC, USA",
    },
  ]);
  const [show, setShow] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", handleShow);
    function handleShow() {
      if (window.innerWidth < 768) setShow(3);
      if (window.innerWidth >= 768) setShow(6);
      if (window.innerWidth >= 1024) setShow(8);
    }
  }, []);

  return (
    <section className="p-4">
      <div className="max-w-6xl container">
        {/* Header */}
        <div>
          <h2 className="font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg text-center">
            Top Tours For You
          </h2>
          <p className="text-[#AEAEAE] text-center mt-3 xl:text-lg">
            Much places for your vibes from the world
          </p>
        </div>
        {/* Tours */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2">
          {tours.slice(0, show).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        {/* Action View All Tours */}
        <div className="flex justify-center">
          <button
            type="button"
            className="text-white bg-primary rounded-xl xl:text-lg py-3 px-9 mt-14 active:scale-95 duration-200"
          >
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopTours;

function TourCard({ tour }) {
  return (
    <Link
      to="/"
      className="bg-white shadow-main rounded-3xl p-4 col-span-1 max-w-[252px] w-full mx-auto flex border hover:shadow-primary/30 flex-col justify-between hover:border-primary/30 hover:scale-[1.03] duration-500"
    >
      {/* cover */}
      <div className="w-full max-w-[220px] h-[160px] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={tour.image}
          loading="lazy"
          alt=""
        />
      </div>
      {/* title */}
      <span className="font-semibold text-lg mt-4 block">{tour.title}</span>
      {/* description */}
      <p className="text-[#AEAEAE] line-clamp-2">{tour.description}</p>
      <div className="flex items-center justify-between mt-9">
        <div className="flex items-center gap-x-1 text-[#AEAEAE]">
          <img src="/image/place.svg" alt="" />
          <span>{tour.location}</span>
        </div>
        <div className="flex items-center gap-x-1 text-[#AEAEAE]">
          <img src="/image/coin.svg" alt="" />
          <span className="flex items-end">
            {tour.pricePerson}/<p className="text-sm">person</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
