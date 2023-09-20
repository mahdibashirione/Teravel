import { useRef, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const withSearch = (ComponentWrapped) => {
  const newComponent = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [options, setOptions] = useState(
      JSON.parse(searchParams.get("options")) || {
        adult: 1,
        children: 0,
        room: 1,
      }
    );
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [search, setSearch] = useState(searchParams.get("city") || "");
    const [openOption, setOpenOption] = useState(false);
    const [openDateRange, setOpenDateRange] = useState(false);
    const navigate = useNavigate(false);

    const handleOptions = (name, oprations) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: oprations === "inc" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const encodedParams = createSearchParams({
        date: JSON.stringify(date),
        city: search,
        options: JSON.stringify(options),
      });
      navigate({
        pathname: "/hotels",
        search: encodedParams.toString(),
      });
    };

    return (
      <ComponentWrapped
        dateRange={{
          openDateRange,
          setOpenDateRange,
          date,
          setDate,
        }}
        options={{ openOption, setOpenOption, handleOptions, options }}
        {...props}
        search={{ search, setSearch }}
        handleSubmit={handleSubmit}
      />
    );
  };
  return newComponent;
};

export default withSearch;
