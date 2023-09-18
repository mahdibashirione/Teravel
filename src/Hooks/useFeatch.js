import { useEffect, useState } from "react";
import http from "../services/httpServices";

function useFeatch(url, filter) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function featch(address) {
    setIsLoading(true);
    try {
      const { data } = await http.Get(address, {
        params: {
          location_id: "293919",
          adults: filter.adult,
          rooms: filter.room,
          nights: "2",
          offset: "0",
          currency: "USD",
          order: "asc",
          limit: "30",
          sort: "recommended",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "b69faa623amsh37d9c75b7bd2f07p196650jsn9dc321ffc358",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      });
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    featch(url);
  }, []);

  return { data, error, isLoading };
}

export default useFeatch;
