import { motion } from "framer-motion";
import { useRef } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { FiMinus, FiPlus, FiSettings } from "react-icons/fi";

const Options = ({ options }) => {
  const guestOptions = useRef();
  useOutsideClick(
    guestOptions,
    () => options.setOpenOption(false),
    "buttonOptions"
  );

  return (
    <div className="hidden md:block pl-6 border-l border-[#AEAEAE] relative">
      <span className="flex text-xl font-semibold lg:text-2xl">
        <p className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px] ">
          <FiSettings />
        </p>
        Options
      </span>
      <button
        onClick={() => options.setOpenOption(!options.openOption)}
        className="placeholder:text-[#AEAEAE] mt-4 bg-transparent outline-none border-none flex items-center whitespace-nowrap gap-x-2 pl-1 buttonOptions text-sm lg:text-base"
        type="button"
      >
        <FiMinus className="text-[#AEAEAE] text-xl buttonOptions ml-1" />
        <span className="text-[#AEAEAE] buttonOptions">
          room {options.options.room} ...
        </span>
        <FiPlus className="text-xl text-primary buttonOptions" />
      </button>
      <motion.div
        ref={guestOptions}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          options.openOption
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        className="p-4 bg-white rounded-2xl w-[165px] absolute top-full mt-4 left-3 shadow-main flex flex-col gap-y-2 border"
      >
        <OptionsItem
          minLimit={1}
          type="adult"
          options={options.options}
          handleOptions={options.handleOptions}
        />
        <OptionsItem
          minLimit={0}
          type="children"
          options={options.options}
          handleOptions={options.handleOptions}
        />
        <OptionsItem
          minLimit={1}
          type="room"
          options={options.options}
          handleOptions={options.handleOptions}
        />
      </motion.div>
    </div>
  );
};

export default Options;

function OptionsItem({ type, options, minLimit, handleOptions }) {
  return (
    <div className="flex items-center justify-between">
      {type}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleOptions(type, "dec")}
          type="button"
          disabled={options[type] <= minLimit}
        >
          <FiMinus />
        </button>
        <span>{options[type]}</span>
        <button onClick={() => handleOptions(type, "inc")} type="button">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
