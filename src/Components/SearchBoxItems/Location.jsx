import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";

const LocationSelect = ({ location }) => {
  const cities = [
    { country: "OST", name: "melborn" },
    { country: "USA", name: "new yourk" },
    { country: "CHR", name: "cidny" },
  ];
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    const result = cities.filter((city) =>
      city.name.includes(location.location)
    );
    setCitys(result);
  }, [location.location]);

  return (
    <div className="relative">
      <label
        htmlFor="locationInput"
        className="flex text-lg font-semibold lg:text-2xl"
      >
        <span className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px]">
          <GoLocation />
        </span>
        Location
      </label>
      <input
        id="locationInput"
        className="placeholder:text-[#AEAEAE] text-sm lg:text-base mt-4 bg-transparent outline-none border-none pl-[34px] peer"
        type="text"
        onChange={(e) => location.setLocation(e.target.value)}
        value={location.location.toUpperCase()}
        placeholder="Where do you want to go?"
      />
      <ul className="absolute w-full top-full mt-4 rounded-2xl shadow-main border flex flex-col max-h-[145px] overflow-y-auto scrollbar-none scale-0 opacity-0 duration-300 peer-focus:scale-100 peer-focus:opacity-100 z-30">
        {citys.length ? (
          citys.map((city, i) => {
            return (
              <button
                key={i}
                type="button"
                className="p-2 odd:bg-white even:bg-gray-200"
                onClick={() => location.setLocation(city.name)}
              >
                {city.name.toUpperCase()} ({city.country})
              </button>
            );
          })
        ) : (
          <p className="text-red-500 p-2 bg-white text-center text-sm">
            not location
          </p>
        )}
      </ul>
    </div>
  );
};

export default LocationSelect;
