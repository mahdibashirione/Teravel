import { motion } from "framer-motion";
import { useRef } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { RiUser3Fill } from "react-icons/ri";
import { TbBuildingCottage } from "react-icons/tb";
import { FaBaby } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const OptionsSelect = ({ optionsData, className }) => {
  const { setOpenOption, openOption, options, handleOptions } = optionsData;
  const guestOption = useRef();

  useOutsideClick(guestOption, (e) => setOpenOption(false), "buttonOptions");

  return (
    <div className={`relative ${className}`}>
      <span
        className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm z-10`}
      >
        Options
      </span>
      <button
        type="button"
        onClick={(e) => setOpenOption(!openOption)}
        id="buttonOptions"
        className="p-4 border border-gray-400 cursor-pointer shadow-primary rounded-md outline-none w-full relative text-left flex items-center gap-3 pr-10 overflow-hidden whitespace-nowrap"
      >
        <span className="flex gap-1 items-center font-bold">
          {options.adult} <RiUser3Fill className="text-lg" />
        </span>
        <span className="flex gap-1 items-center font-bold">
          {options.children} <FaBaby className="text-lg" />
        </span>
        <span className="flex gap-1 items-center font-bold">
          {options.room} <TbBuildingCottage className="text-lg" />
        </span>
      </button>
      <svg
        className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.25 9L12 15.75L18.75 9"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <GuestOptionsList
        isOpen={openOption}
        handleOptions={handleOptions}
        options={options}
        refrens={guestOption}
      />
    </div>
  );
};

export default OptionsSelect;

function GuestOptionsList({ refrens, options, handleOptions, isOpen }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      ref={refrens}
      className={`absolute top-full left-0 mt-1 bg-white border p-4 rounded shadow w-full border-gray-400/70 flex flex-col gap-y-2 overflow-hidden shadow-zinc-300`}
    >
      <OptionItem
        icon={<RiUser3Fill className="text-lg" />}
        handleOptions={handleOptions}
        type="adult"
        minLimit={1}
        options={options}
      />
      <OptionItem
        icon={<FaBaby className="text-lg" />}
        handleOptions={handleOptions}
        type="children"
        minLimit={0}
        options={options}
      />
      <OptionItem
        icon={<TbBuildingCottage className="text-lg" />}
        handleOptions={handleOptions}
        type="room"
        minLimit={1}
        options={options}
      />
    </motion.div>
  );
}

function OptionItem({ type, minLimit, options, handleOptions, icon }) {
  return (
    <div className="flex items-center gap-4 select-none w-full max-w-[200px] mx-auto">
      <span className="font-semibold flex-1 flex items-center gap-1">
        {icon}
        {type}
      </span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={minLimit >= options[type]}
          onClick={() => handleOptions(type, "dec")}
          className="p-1.5"
        >
          <FiMinus />
        </button>
        <span>{options[type]}</span>
        <button
          type="button"
          onClick={() => handleOptions(type, "inc")}
          className="p-1.5"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
