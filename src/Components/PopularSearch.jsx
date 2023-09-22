import { useState } from "react";

const PopularSearch = () => {
  const [searches, setSearches] = useState([
    { id: 1, title: "Eiffel tower" },
    { id: 2, title: "Bali" },
    { id: 3, title: "Eiffel tower" },
    { id: 4, title: "Egypt" },
    { id: 5, title: "Turkey" },
    { id: 6, title: "The Grand Canyon" },
    { id: 7, title: "Cappadocia" },
    { id: 8, title: "UAE" },
    { id: 9, title: "The Grand Canyon" },
    { id: 10, title: "London" },
    { id: 11, title: "USA" },
    { id: 12, title: "Temple Japan" },
  ]);

  return (
    <section className="p-4 pt-16">
      <div className="container max-w-6xl">
        <h2 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg text-center">
          Popular Search
        </h2>
        <ul className="w-full flex flex-wrap gap-4 lg:gap-5 mt-10 justify-center">
          {searches.map((search) => {
            return (
              <li
                key={search.id}
                className="lg:text-xl md:text-lg py-2 px-3 border-2 rounded-[15px] text-[#AEAEAE] border-[#AEAEAE]"
              >
                {search.title}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PopularSearch;
