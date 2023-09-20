import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFeatch from "../Hooks/useFeatch";

const HotelsContext = createContext();

const HotelsProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const city = searchParams.get("city");
  const options = searchParams.get("options");
  const date = searchParams.get("date");

  const { data, isLoading, error } = useFeatch(
    "https://travel-advisor.p.rapidapi.com/hotels/list",
    options
  );

  return (
    <HotelsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsProvider;

export function useHotels() {
  return useContext(HotelsContext);
}
