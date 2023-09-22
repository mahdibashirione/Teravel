import { useRef } from "react";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Category = () => {
  const [categorys, setCategorys] = useState([
    { id: 1, url: "/", name: "Beach", image: "/image/category/1.svg" },
    { id: 2, url: "/", name: "Mountain", image: "/image/category/2.svg" },
    { id: 3, url: "/", name: "Desert", image: "/image/category/3.svg" },
    { id: 4, url: "/", name: "Tower", image: "/image/category/4.svg" },
    { id: 5, url: "/", name: "Temple", image: "/image/category/5.svg" },
    { id: 6, url: "/", name: "Forest", image: "/image/category/6.svg" },
    { id: 7, url: "/", name: "City", image: "/image/category/3.svg" },
  ]);

  const slider = useRef();

  const handlerSlider = (type) => {
    switch (type) {
      case "left": {
        slider.current.scrollLeft -= 141;
        break;
      }
      case "right": {
        slider.current.scrollLeft += 141;
        break;
      }
    }
  };

  return (
    <section className="p-4 mt-[70px]">
      <div className="container max-w-6xl bg-[#F9FBFF] rounded-[30px] py-6 shadow pb-12">
        {/* Header */}
        <div className="flex justify-between items-start md:px-[74px] px-4">
          {/* title */}
          <div className="flex items-center flex-wrap gap-x-2">
            <span className="block h-1 w-8 rounded-full bg-slate-900"></span>
            <h2 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg text-center">
              Category
            </h2>
            <p className="w-full text-sm md:text-base text-[#AEAEAE] pl-10 mt-4">
              You don't have to look for your tour for a long <br />
              time. We have grouped them by category
            </p>
          </div>
          {/* actions */}
          <div className="flex gap-x-2">
            <button
              onClick={() => handlerSlider("left")}
              className="rounded-full p-2 text-2xl border-2 text-primary border-primary"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => handlerSlider("right")}
              className="rounded-full p-2 text-2xl bg-primary text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
        {/* Slider */}
        <ul
          ref={slider}
          className="w-full md:px-[74px] px-4 overflow-x-scroll scrollbar-none flex mt-7 scroll-smooth gap-x-4 lg:gap-x-10"
        >
          {categorys.map((category) => {
            return (
              <li key={category.id}>
                <Link to={category.url} className="block">
                  <div className="min-w-fit w-[125px] h-[165px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={category.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm md:text-base mt-2 block text-center font-semibold">
                    {category.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Category;
