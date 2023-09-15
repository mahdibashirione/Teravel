import { useState } from "react";
import { Link } from "react-router-dom";

const Option = () => {
  const [optionData, setOptionData] = useState({
    title: "Backpacking Sri Lanka",
    description:
      "Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.",
    url: "/",
    price: 700,
    image: [
      "image/option1.svg",
      "image/option2.svg",
      "image/option3.svg",
      "image/option4.svg",
    ],
  });

  return (
    <section className="p-4">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between md:mt-4 md:mb-2">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl">Fall into travel</h2>
            <span className="text-sm xl:text-base">
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </span>
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
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1300px] mx-auto mt-4">
          <div className="col-span-1 bg-primary p-4 rounded-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-3xl lg:text-5xl xl:text-6xl">
                {optionData.title}
              </h3>
              <div className="py-2 px-4 rounded-lg bg-white">
                From <br />
                <span className="font-bold">${optionData.price}</span>
              </div>
            </div>
            <p className="text-sm md:text-base mt-6 text-justify">
              {optionData.description}
            </p>
            <button className="w-full">
              <Link
                to={optionData.url}
                className="block bg-white py-4 rounded-lg mt-8 text-sm md:text-base hover:shadow "
              >
                Book Flight
              </Link>
            </button>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-4">
            {optionData.image.map((image, i) => {
              return (
                <img
                  className="col-span-1"
                  key={i}
                  src={image}
                  loading="lazy"
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option;
