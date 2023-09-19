import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFeatch from "../Hooks/useFeatch";

const HotelsContext = createContext();

const HotelsProvider = ({ children }) => {
  // state
  const [seachParams, setSearchParams] = useSearchParams();
  // Params
  const options = JSON.parse(seachParams.get("options"));
  const date = JSON.parse(seachParams.get("date"));
  const city = seachParams.get("city");
  // Featch
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
