import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTarget, useTargetActions } from "../context/TargetProvider";

const SearchBox = ({ tabs }) => {
  const [saerchValue, setSearchValue] = useState("");
  const target = useTarget();
  const { handleChangeTarget } = useTargetActions();

  return (
    <article className="absolute -bottom-28 left-1/2 z-20 -translate-x-1/2 bg-white shadow rounded-2xl p-4 w-[90%]">
      {/* tabs */}
      <div className="flex items-center divide-x">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              className={`flex items-center flex-wrap gap-2 px-4 text-sm md:text-base`}
              onClick={(e) => handleChangeTarget(tab.title)}
            >
              {tab.icon}
              {tab.title}
              <span
                className={`block w-full h-1 rounded-full mt-1 duration-300 ${
                  target === tab.title ? "bg-primary" : "bg-transparent"
                }`}
              ></span>
            </button>
          );
        })}
      </div>
      {/* inputs */}
      <div className="flex my-6 md:my-8 gap-2">
        {/* search */}
        <div className="relative flex-1">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Where to you?
          </label>
          <input
            id="search-inpu"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="germany"
          />
          <svg
            className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* bedroom */}
        <div className="relative w-[150px] hidden md:block">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Bedroom?
          </label>
          <input
            id="search-inpu"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="2"
          />
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
        </div>
        {/* date */}
        <div className="relative flex-1 hidden md:block">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Depart-Return?
          </label>
          <input
            id="search-inpu"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="02/25/2022-03/01/2022"
          />
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
        </div>
        {/* price */}
        <div className="relative flex-1 hidden md:block">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            $dollar/day
          </label>
          <input
            id="search-inpu"
            className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="max-256$"
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
          Show {target}
        </button>
      </div>
    </article>
  );
};

export default SearchBox;
