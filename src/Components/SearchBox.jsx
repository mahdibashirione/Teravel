import withSearch from "../HOC/withSearch";
import { BiSearchAlt } from "react-icons/bi";
import Options from "./SearchBoxItems/Options";
import DateRangeSelect from "./SearchBoxItems/DateRange";
import LocationSelect from "./SearchBoxItems/Location";

const SearchBox = ({ dateRange, options, location, handleSubmit }) => {
  return (
    <article className="absolute md:-bottom-16 -bottom-[52px] left-1/2 -translate-x-1/2 select-none">
      {/* forms */}
      <form
        onSubmit={handleSubmit}
        className="lg:p-8 md:p-6 p-5 flex lg:gap-x-6 gap-x-4 md:rounded-[32px] rounded-3xl bg-white/90 shadow-main backdrop-blur"
      >
        <LocationSelect location={location} />
        <DateRangeSelect dateRange={dateRange} />
        <Options options={options} />
        {/* Submit */}
        <button
          type="submit"
          className="bg-primary px-6 lg:px-8 text-white text-2xl md:text-3xl rounded-[10px] duration-200 active:scale-95 selec"
        >
          <BiSearchAlt />
        </button>
      </form>
    </article>
  );
};

export default withSearch(SearchBox);
