import { useRef, useState } from "react";
import { FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import { RiUser3Fill } from "react-icons/ri";
import { TbBuildingCottage } from "react-icons/tb";
import { FaBaby } from "react-icons/fa";
import useOutsideClick from "../Hooks/useOutsideClick";
import { motion } from "framer-motion";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const SearchBox = ({ tabs }) => {
  const [saerchValue, setSearchValue] = useState("");
  const [optionsValue, setOptionsValue] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [openDateRange, setOpenDateRange] = useState(false);
  const guestOption = useRef();
  const guestDateRange = useRef();

  useOutsideClick(guestOption, (e) => setOpenOption(false), "buttonOptions");
  useOutsideClick(
    guestDateRange,
    (e) => setOpenDateRange(false),
    "buttonDateRange"
  );

  const handleOptions = (name, oprations) => {
    setOptionsValue((prev) => {
      return {
        ...prev,
        [name]:
          oprations === "inc" ? optionsValue[name]++ : optionsValue[name]--,
      };
    });
  };

  return (
    <article className="absolute -bottom-56 md:-bottom-28 left-1/2 z-20 -translate-x-1/2 bg-white shadow rounded-2xl p-4 w-[90%] border max-w-[1300px]">
      {/* tabs */}
      <div>
        <h2 className="select-none flex text-sm md:text-base relative font-bold">
          <FiSearch className="text-lg mr-1" />
          Search of Hotels
        </h2>
      </div>
      {/* inputs */}
      <div className="flex flex-col md:flex-row my-6 md:my-8 gap-2 gap-y-4 mt-8">
        {/* search */}
        <div className="relative flex-1 text-sm lg:text-base">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Enter Destination
          </label>
          <input
            id="search-inpu"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="gerIstanbul, Turkeymany"
          />
          <svg
            className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z"
              fill="#112211"
            />
          </svg>
        </div>
        {/* Chek Out */}
        <div className="relative flex-1">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Chek Out
          </label>
          <button
            onClick={(e) => setOpenDateRange(!openDateRange)}
            id="buttonDateRange"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full text-left text-sm md:text-base"
          >
            {format(date[0].startDate, "mm/dd/yyyy")} -{" "}
            {format(date[0].endDate, "mm/dd/yyyy")}
          </button>
          <svg
            className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6.85715C21 6.17516 20.7291 5.52111 20.2468 5.03887C19.7646 4.55663 19.1106 4.28572 18.4286 4.28572H17.7857V3.66094C17.7857 3.315 17.5197 3.01808 17.1738 3.00081C17.0869 2.99662 17 3.01012 16.9185 3.0405C16.8369 3.07087 16.7624 3.11749 16.6994 3.17752C16.6364 3.23755 16.5862 3.30975 16.552 3.38974C16.5177 3.46972 16.5 3.55584 16.5 3.64286V4.28572H7.5V3.66094C7.5 3.315 7.23402 3.01808 6.88808 3.00081C6.80116 2.99662 6.71429 3.01012 6.63275 3.0405C6.5512 3.07087 6.47667 3.11749 6.41367 3.17752C6.35067 3.23755 6.30051 3.30975 6.26624 3.38974C6.23197 3.46972 6.21429 3.55584 6.21429 3.64286V4.28572H5.57143C4.88944 4.28572 4.23539 4.55663 3.75315 5.03887C3.27092 5.52111 3 6.17516 3 6.85715V7.33929C3 7.38191 3.01693 7.42279 3.04707 7.45293C3.07721 7.48307 3.11809 7.5 3.16071 7.5H20.8393C20.8819 7.5 20.9228 7.48307 20.9529 7.45293C20.9831 7.42279 21 7.38191 21 7.33929V6.85715ZM3 18.4286C3 19.1106 3.27092 19.7646 3.75315 20.2468C4.23539 20.7291 4.88944 21 5.57143 21H18.4286C19.1106 21 19.7646 20.7291 20.2468 20.2468C20.7291 19.7646 21 19.1106 21 18.4286V8.90625C21 8.87428 20.9873 8.84363 20.9647 8.82102C20.9421 8.79842 20.9114 8.78572 20.8795 8.78572H3.12054C3.08857 8.78572 3.05791 8.79842 3.0353 8.82102C3.0127 8.84363 3 8.87428 3 8.90625V18.4286ZM16.8214 10.0714C17.0121 10.0714 17.1986 10.128 17.3572 10.2339C17.5157 10.3399 17.6393 10.4905 17.7123 10.6667C17.7853 10.8429 17.8044 11.0368 17.7672 11.2238C17.73 11.4109 17.6381 11.5827 17.5033 11.7176C17.3684 11.8524 17.1966 11.9443 17.0096 11.9815C16.8225 12.0187 16.6286 11.9996 16.4524 11.9266C16.2762 11.8536 16.1256 11.73 16.0197 11.5714C15.9137 11.4129 15.8571 11.2264 15.8571 11.0357C15.8571 10.78 15.9587 10.5347 16.1396 10.3539C16.3204 10.173 16.5657 10.0714 16.8214 10.0714ZM16.8214 13.2857C17.0121 13.2857 17.1986 13.3423 17.3572 13.4482C17.5157 13.5542 17.6393 13.7048 17.7123 13.881C17.7853 14.0572 17.8044 14.2511 17.7672 14.4381C17.73 14.6252 17.6381 14.797 17.5033 14.9319C17.3684 15.0667 17.1966 15.1586 17.0096 15.1958C16.8225 15.233 16.6286 15.2139 16.4524 15.1409C16.2762 15.0679 16.1256 14.9443 16.0197 14.7857C15.9137 14.6272 15.8571 14.4407 15.8571 14.25C15.8571 13.9943 15.9587 13.749 16.1396 13.5681C16.3204 13.3873 16.5657 13.2857 16.8214 13.2857ZM13.6071 10.0714C13.7979 10.0714 13.9843 10.128 14.1429 10.2339C14.3014 10.3399 14.425 10.4905 14.498 10.6667C14.571 10.8429 14.5901 11.0368 14.5529 11.2238C14.5157 11.4109 14.4239 11.5827 14.289 11.7176C14.1541 11.8524 13.9823 11.9443 13.7953 11.9815C13.6082 12.0187 13.4143 11.9996 13.2381 11.9266C13.0619 11.8536 12.9113 11.73 12.8054 11.5714C12.6994 11.4129 12.6429 11.2264 12.6429 11.0357C12.6429 10.78 12.7445 10.5347 12.9253 10.3539C13.1061 10.173 13.3514 10.0714 13.6071 10.0714ZM13.6071 13.2857C13.7979 13.2857 13.9843 13.3423 14.1429 13.4482C14.3014 13.5542 14.425 13.7048 14.498 13.881C14.571 14.0572 14.5901 14.2511 14.5529 14.4381C14.5157 14.6252 14.4239 14.797 14.289 14.9319C14.1541 15.0667 13.9823 15.1586 13.7953 15.1958C13.6082 15.233 13.4143 15.2139 13.2381 15.1409C13.0619 15.0679 12.9113 14.9443 12.8054 14.7857C12.6994 14.6272 12.6429 14.4407 12.6429 14.25C12.6429 13.9943 12.7445 13.749 12.9253 13.5681C13.1061 13.3873 13.3514 13.2857 13.6071 13.2857ZM13.6071 16.5C13.7979 16.5 13.9843 16.5566 14.1429 16.6625C14.3014 16.7685 14.425 16.9191 14.498 17.0953C14.571 17.2715 14.5901 17.4654 14.5529 17.6524C14.5157 17.8395 14.4239 18.0113 14.289 18.1461C14.1541 18.281 13.9823 18.3728 13.7953 18.41C13.6082 18.4473 13.4143 18.4282 13.2381 18.3552C13.0619 18.2822 12.9113 18.1586 12.8054 18C12.6994 17.8414 12.6429 17.655 12.6429 17.4643C12.6429 17.2085 12.7445 16.9633 12.9253 16.7824C13.1061 16.6016 13.3514 16.5 13.6071 16.5ZM10.3929 13.2857C10.5836 13.2857 10.77 13.3423 10.9286 13.4482C11.0872 13.5542 11.2108 13.7048 11.2837 13.881C11.3567 14.0572 11.3758 14.2511 11.3386 14.4381C11.3014 14.6252 11.2096 14.797 11.0747 14.9319C10.9399 15.0667 10.768 15.1586 10.581 15.1958C10.3939 15.233 10.2 15.2139 10.0238 15.1409C9.84764 15.0679 9.69704 14.9443 9.59108 14.7857C9.48513 14.6272 9.42857 14.4407 9.42857 14.25C9.42857 13.9943 9.53017 13.749 9.711 13.5681C9.89184 13.3873 10.1371 13.2857 10.3929 13.2857ZM10.3929 16.5C10.5836 16.5 10.77 16.5566 10.9286 16.6625C11.0872 16.7685 11.2108 16.9191 11.2837 17.0953C11.3567 17.2715 11.3758 17.4654 11.3386 17.6524C11.3014 17.8395 11.2096 18.0113 11.0747 18.1461C10.9399 18.281 10.768 18.3728 10.581 18.41C10.3939 18.4473 10.2 18.4282 10.0238 18.3552C9.84764 18.2822 9.69704 18.1586 9.59108 18C9.48513 17.8414 9.42857 17.655 9.42857 17.4643C9.42857 17.2085 9.53017 16.9633 9.711 16.7824C9.89184 16.6016 10.1371 16.5 10.3929 16.5ZM7.17857 13.2857C7.36929 13.2857 7.55572 13.3423 7.7143 13.4482C7.87288 13.5542 7.99647 13.7048 8.06946 13.881C8.14244 14.0572 8.16154 14.2511 8.12433 14.4381C8.08712 14.6252 7.99528 14.797 7.86042 14.9319C7.72557 15.0667 7.55375 15.1586 7.36669 15.1958C7.17964 15.233 6.98576 15.2139 6.80956 15.1409C6.63336 15.0679 6.48275 14.9443 6.3768 14.7857C6.27084 14.6272 6.21429 14.4407 6.21429 14.25C6.21429 13.9943 6.31588 13.749 6.49672 13.5681C6.67756 13.3873 6.92283 13.2857 7.17857 13.2857ZM7.17857 16.5C7.36929 16.5 7.55572 16.5566 7.7143 16.6625C7.87288 16.7685 7.99647 16.9191 8.06946 17.0953C8.14244 17.2715 8.16154 17.4654 8.12433 17.6524C8.08712 17.8395 7.99528 18.0113 7.86042 18.1461C7.72557 18.281 7.55375 18.3728 7.36669 18.41C7.17964 18.4473 6.98576 18.4282 6.80956 18.3552C6.63336 18.2822 6.48275 18.1586 6.3768 18C6.27084 17.8414 6.21429 17.655 6.21429 17.4643C6.21429 17.2085 6.31588 16.9633 6.49672 16.7824C6.67756 16.6016 6.92283 16.5 7.17857 16.5Z"
              fill="#112211"
            />
          </svg>
          <motion.div
            ref={guestDateRange}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              openDateRange
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            className="absolute top-full mt-2 left-0 z-20 shadow border rounded"
          >
            <DateRange
              ranges={date}
              onChange={(item) => setDate([item.selection])}
            />
          </motion.div>
        </div>
        {/* Options */}
        <div className="relative flex-1 text-sm lg:text-base">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm z-10`}
          >
            Options
          </label>
          <button
            onClick={(e) => setOpenOption(!openOption)}
            id="buttonOptions"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full relative text-left flex items-center gap-3"
          >
            <span className="flex gap-1 items-center font-bold">
              {optionsValue.adult} <RiUser3Fill className="text-lg" />
            </span>
            <span className="flex gap-1 items-center font-bold">
              {optionsValue.children} <FaBaby className="text-lg" />
            </span>
            <span className="flex gap-1 items-center font-bold">
              {optionsValue.room} <TbBuildingCottage className="text-lg" />
            </span>
          </button>
          <svg
            className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2"
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
            options={optionsValue}
            refrens={guestOption}
          />
        </div>
      </div>
      {/* actions */}
      <div className="w-full flex justify-end items-center">
        <button className="bg-transparent text-sm md:text-base flex items-center gap-2 py-2.5 px-4 rounded-md active:scale-95 duration-200">
          <FiPlus className="md:text-2xl" />
          Explore
        </button>
        <button className="bg-primary text-sm md:text-base flex items-center gap-2 py-2.5 px-4 rounded-md active:scale-95 duration-200">
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1716 1.83039C22.0182 1.67706 21.8238 1.57132 21.6118 1.52591C21.3997 1.4805 21.179 1.49736 20.9763 1.57445L2.2249 8.6718H2.22115C2.00494 8.75495 1.81968 8.90282 1.69066 9.09521C1.56163 9.2876 1.49515 9.51513 1.50028 9.74672C1.5054 9.97831 1.5819 10.2027 1.71931 10.3892C1.85672 10.5756 2.04835 10.7152 2.26802 10.7887L2.28724 10.7948L8.72318 13.543C8.84871 13.5812 8.98204 13.5857 9.10986 13.5561C9.23768 13.5266 9.35552 13.4641 9.45162 13.3748L19.781 3.74992C19.8118 3.71914 19.8483 3.69473 19.8885 3.67807C19.9287 3.66142 19.9718 3.65284 20.0154 3.65284C20.0589 3.65284 20.102 3.66142 20.1422 3.67807C20.1824 3.69473 20.219 3.71914 20.2497 3.74992C20.2805 3.7807 20.3049 3.81724 20.3216 3.85746C20.3382 3.89767 20.3468 3.94077 20.3468 3.9843C20.3468 4.02783 20.3382 4.07093 20.3216 4.11114C20.3049 4.15136 20.2805 4.18789 20.2497 4.21867L10.6244 14.5434C10.5351 14.6395 10.4726 14.7573 10.4431 14.8851C10.4135 15.0129 10.418 15.1463 10.4561 15.2718L13.2054 21.7115C13.2082 21.7209 13.211 21.7293 13.2143 21.7382C13.3643 22.1727 13.744 22.4793 14.2029 22.4999H14.2497C14.4814 22.5012 14.7081 22.4328 14.9004 22.3036C15.0927 22.1744 15.2416 21.9903 15.3279 21.7752L22.4243 3.02899C22.5025 2.82615 22.5202 2.605 22.4754 2.39229C22.4305 2.17957 22.325 1.98441 22.1716 1.83039Z"
              fill="black"
            />
          </svg>
          Show Hotels
        </button>
      </div>
    </article>
  );
};

export default SearchBox;

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
          disabled={minLimit >= options[type]}
          onClick={() => handleOptions(type, "dec")}
          className="p-1.5 rounded bg-primary "
        >
          <FiMinus />
        </button>
        <span>{options[type]}</span>
        <button
          onClick={() => handleOptions(type, "inc")}
          className="p-1.5 rounded bg-primary "
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
