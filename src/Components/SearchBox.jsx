import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTarget, useTargetActions } from "../context/TargetProvider";

const SearchBox = ({ tabs, saerchFor, handleChangeSearchFor }) => {
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
            className="p-4 border-2 rounded-lg outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="germany"
          />
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
            className="p-4 border-2 rounded-lg outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="02/25/2022-03/01/2022"
          />
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
            className="p-4 border-2 rounded-lg outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="max-256$"
          />
        </div>
        {/* bedroom */}
        <div className="relative flex-1 hidden md:block">
          <label
            htmlFor="search-input"
            className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
          >
            Bedroom?
          </label>
          <input
            id="search-inpu"
            className="p-4 border-2 rounded-lg outline-none focus:border-primary w-full"
            onChange={(e) => setSearchValue(e.target.value)}
            value={saerchValue}
            type="text"
            placeholder="2"
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
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9925 1.07153L13.9925 1.07155L1.49156 5.80311L1.48327 5.80625V5.80537C1.34617 5.85948 1.22872 5.95403 1.14657 6.07652C1.06324 6.20077 1.0203 6.34771 1.02362 6.49728C1.02693 6.64685 1.07633 6.79175 1.16507 6.91219C1.25378 7.03258 1.37747 7.12266 1.51927 7.17015C1.51933 7.17017 1.51939 7.17019 1.51945 7.17021L1.53191 7.17416L1.53408 7.17485L1.53403 7.17495L5.82347 9.00663C5.90288 9.03051 5.98716 9.03325 6.06797 9.01458C6.14919 8.99582 6.22406 8.95608 6.28512 8.89933L13.1708 2.48337C13.1709 2.48327 13.171 2.48317 13.1711 2.48307C13.1937 2.46051 13.2205 2.44261 13.25 2.43038C13.2797 2.4181 13.3115 2.41178 13.3436 2.41178C13.3757 2.41178 13.4075 2.4181 13.4371 2.43038C13.4668 2.44267 13.4937 2.46067 13.5164 2.48337C13.5391 2.50606 13.5571 2.533 13.5694 2.56266C13.5817 2.59231 13.588 2.62409 13.588 2.65619C13.588 2.68828 13.5817 2.72007 13.5694 2.74972C13.5572 2.77924 13.5393 2.80608 13.5167 2.82872C13.5166 2.82881 13.5165 2.82891 13.5164 2.82901L7.10012 9.71152L13.9925 1.07153ZM13.9925 1.07153C14.1235 1.02174 14.266 1.01086 14.4029 1.04018C14.5399 1.0695 14.6654 1.13778 14.7645 1.23679M13.9925 1.07153L14.7645 1.23679M14.7645 1.23679C14.8636 1.33626 14.9317 1.46231 14.9607 1.59968C14.9896 1.73706 14.9781 1.87988 14.9276 2.01088L14.9276 2.01102L10.1968 14.5081L14.7645 1.23679ZM9.46858 14.9999H9.49983C9.65427 15.0008 9.80542 14.9552 9.9336 14.8691C10.0618 14.7829 10.1611 14.6602 10.2186 14.5168L10.1967 14.5085L10.1967 14.5083C10.141 14.6472 10.0447 14.7661 9.92052 14.8496C9.79624 14.9331 9.64971 14.9774 9.49996 14.9765H9.49983H9.4691M9.46858 14.9999L9.46963 14.9765C9.46945 14.9765 9.46928 14.9765 9.4691 14.9765M9.46858 14.9999V14.9765H9.4691M9.46858 14.9999C9.16264 14.9862 8.90952 14.7818 8.80952 14.4921C8.80733 14.4862 8.80545 14.4806 8.80358 14.4743L6.97077 10.1812M9.4691 14.9765C9.17379 14.963 8.92874 14.7657 8.83168 14.4845L8.83151 14.484C8.82949 14.4786 8.82777 14.4734 8.82603 14.4676L8.82617 14.4675L8.82513 14.4651L6.99283 10.1732M6.99283 10.1732C6.99295 10.1736 6.99307 10.174 6.99319 10.1744L6.97077 10.1812M6.99283 10.1732C6.96895 10.0938 6.9662 10.0095 6.98487 9.92868C7.00363 9.84747 7.04336 9.7726 7.1001 9.71155L6.96204 9.9234C6.94235 10.0086 6.94536 10.0975 6.97077 10.1812M6.99283 10.1732L6.99232 10.172L6.97077 10.1812"
              fill="black"
              stroke="#112211"
              strokeWidth="0.046875"
            />
          </svg>
          Show {saerchFor}
        </button>
      </div>
    </article>
  );
};

export default SearchBox;
