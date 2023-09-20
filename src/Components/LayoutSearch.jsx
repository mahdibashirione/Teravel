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
    <section className="max-w-[1550px] mx-auto">
      <div className="flex flex-wrap z-10">
        {/* Sidebar */}
        <div
          className={`bg-white shadow w-[300px] min-h-full pr-4 fixed top-[68px] duration-300 lg:static lg:p-2 lg:w-[270px] border-r border-gray-300 ${
            isOpen ? "left-0" : "-left-[300px]"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="p-4 flex items-start justify-start flex-col gap-6 lg:sticky top-[78px]"
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
        <div className="flex-1">
          <Outlet />
        </div>
        {/* Map */}
        <div className="min-h-full flex-1 hidden md:block z-10">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default withSearch(memo(LayoutSearch));
