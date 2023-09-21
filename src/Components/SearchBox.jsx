import withSearch from "../HOC/withSearch";
import { GoLocation } from "react-icons/go";
import { BiCalendar, BiSearchAlt, BiUser } from "react-icons/bi";
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi";

const SearchBox = ({ dateRange, options, search, handleSubmit }) => {
  return (
    <article className="absolute md:-bottom-16 -bottom-[52px] left-1/2 md:rounded-[32px] rounded-3xl overflow-hidden -translate-x-1/2 bg-white/90 shadow-main backdrop-blur">
      {/* forms */}
      <form
        onSubmit={handleSubmit}
        className="md:p-8 p-5 flex md:gap-x-6 gap-x-4"
      >
        <div>
          <label
            htmlFor=""
            className="flex text-lg md:text-xl font-semibold lg:text-2xl"
          >
            <span className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px]">
              <GoLocation />
            </span>
            Location
          </label>
          <input
            className="placeholder:text-[#AEAEAE] text-sm md:text-base mt-4 bg-transparent outline-none border-none pl-[34px]"
            type="text"
            onChange={(e) => search.setSearch(e.target.value)}
            value={search.search}
            placeholder="Where do you want to go?"
          />
        </div>
        <div className="hidden pl-6 border-l border-[#aeaeae]">
          <label htmlFor="" className="flex text-xl font-semibold lg:text-2xl">
            <span className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px] ">
              <BiCalendar />
            </span>
            Date
          </label>
          <button
            className="placeholder:text-[#AEAEAE] mt-4 bg-transparent outline-none border-none pl-[34px] flex items-center whitespace-nowrap"
            type="button"
          >
            <span className="text-[#AEAEAE]">Choose date</span>
            <FiChevronDown className="text-[#AEAEAE] text-xl ml-1" />
          </button>
        </div>
        <div className="hidden pl-6 border-l border-[#AEAEAE]">
          <label htmlFor="" className="flex text-xl font-semibold lg:text-2xl">
            <span className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px] ">
              <BiUser />
            </span>
            People
          </label>
          <button
            className="placeholder:text-[#AEAEAE] mt-4 bg-transparent outline-none border-none flex items-center whitespace-nowrap gap-x-2"
            type="button"
          >
            <FiMinus className="text-[#AEAEAE] text-2xl hover:bg-[#E0D6FF] hover:shadow p-0.5 hover:text-white rounded-full" />
            <span className="text-[#AEAEAE]">Add people</span>
            <FiPlus className="text-2xl text-primary hover:bg-[#E0D6FF] hover:shadow p-0.5 rounded-full" />
          </button>
        </div>
        <button
          type="submit"
          className="bg-primary px-6 md:px-8 text-white text-2xl md:text-3xl rounded-[10px] duration-200 active:scale-95 selec"
        >
          <BiSearchAlt />
        </button>
      </form>
    </article>
  );
};

export default withSearch(SearchBox);
