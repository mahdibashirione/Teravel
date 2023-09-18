import { Outlet } from "react-router-dom";
import SearchBox from "./SearchBox";
import withSearch from "../HOC/withSearch";
import CitySelect from "./SearchBox/CitySelect";
import DateRangeSelect from "./SearchBox/DateRange";
import OptionsSelect from "./SearchBox/OptionsSelect";
import {
  FiChevronDown,
  FiChevronLeft,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Map from "./Map";

const LayoutSearch = ({ dateRange, options, search, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="h-screen flex flex-wrap container">
        {/* Sidebar */}
        <div
          className={`bg-white shadow w-[300px] h-full pr-4 fixed top-0 duration-300 lg:static lg:p-2 lg:bg-transparent lg:shadow-none lg:w-[270px] ${
            isOpen ? "left-0" : "-left-[300px]"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="h-full p-4 flex items-start justify-start flex-col gap-6 lg:bg-white lg:shadow lg:rounded-2xl lg:border"
          >
            <CitySelect className="w-full" searchData={search} />
            <DateRangeSelect className="w-full" dateRangeData={dateRange} />
            <OptionsSelect className="w-full" optionsData={options} />
            <button
              onClick={() => setIsOpen(false)}
              type="submit"
              className="py-3 text-2xl w-full bg-primary md:px-4 rounded-lg flex items-center justify-center gap-2 duration-200 active:scale-95"
            >
              <FiSearch />
              <span className="md:text-base text-sm font-bold">
                Show Hotels
              </span>
            </button>
          </form>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 text-lg rounded-full bg-zinc-900 text-white absolute -right-5 top-16 duration-500 ${
              isOpen ? "" : "-right-8 rotate-180 pr-4"
            } lg:hidden`}
          >
            <FiChevronLeft className={`${!isOpen && "mr-4"}`} />
          </button>
        </div>
        {/* Content */}
        <div className="flex-1 h-full">
          <Outlet />
        </div>
        {/* Map */}
        <div className="flex-1 hidden md:block py-2">
          <div className="h-full shadow rounded-2xl overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSearch(memo(LayoutSearch));
