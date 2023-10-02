import { Outlet } from "react-router-dom";
import withSearch from "../HOC/withSearch";
"react-icons/fi";
import { memo, useState } from "react";
import SidebarFilters from "./SidebarFilters";

const LayoutSearch = ({ dateRange, options, search, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-[1550px] mx-auto">
      <div className="flex gap-4 container max-w-7xl p-4">
        <SidebarFilters />
        {/* Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default withSearch(memo(LayoutSearch));
