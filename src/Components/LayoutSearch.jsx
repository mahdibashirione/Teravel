import { Outlet } from "react-router-dom";
import withSearch from "../HOC/withSearch";
import DateRangeSelect from "./SearchBoxItems/DateRange";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import { memo, useState } from "react";
import Map from "./Map";
import LocationSelect from "./SearchBoxItems/Location";
import Options from "./SearchBoxItems/Options";

const LayoutSearch = ({ dateRange, options, search, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-[1550px] mx-auto">
      <div className="flex flex-wrap z-10">
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
