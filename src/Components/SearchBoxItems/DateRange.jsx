import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const DateRangeSelect = ({ dateRange }) => {
  const startDate = format(dateRange.date[0].startDate, "dd/mm");
  const endDate = format(dateRange.date[0].endDate, "dd/mm");
  const guestDateRange = useRef();

  useOutsideClick(
    guestDateRange,
    () => dateRange.setOpenDateRange(false),
    "buttonDateRange"
  );

  return (
    <div className="hidden md:block pl-6 border-l border-[#AEAEAE] relative">
      <span className="flex text-xl font-semibold lg:text-2xl">
        <p className="bg-[#E0D6FF] shadow w-6 h-6 flex items-center justify-center rounded-full text-primary text-base mr-[10px] ">
          <BiCalendar />
        </p>
        Date
      </span>
      <button
        onClick={() => dateRange.setOpenDateRange(!dateRange.openDateRange)}
        className="placeholder:text-[#AEAEAE] mt-4 text-sm lg:text-base bg-transparent outline-none border-none pl-[34px] flex items-center whitespace-nowrap buttonDateRange"
        type="button"
      >
        <span
          className={`${
            startDate === endDate ? "text-[#AEAEAE]" : "text-slate-800"
          }  buttonDateRange`}
        >
          {startDate === endDate
            ? "Choose date"
            : `${format(dateRange.date[0].startDate, "dd/mm")} - ${format(
                dateRange.date[0].endDate,
                "dd/mm"
              )}`}
        </span>
        <FiChevronDown className="text-[#AEAEAE] text-xl ml-1 buttonDateRange" />
      </button>
      <motion.div
        ref={guestDateRange}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          dateRange.openDateRange
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        className="absolute top-full mt-4 -left-16 shadow border rounded z-20"
      >
        <DateRange
          ranges={dateRange.date}
          onChange={(item) => dateRange.setDate([item.selection])}
        />
      </motion.div>
    </div>
  );
};

export default DateRangeSelect;
