import { useRef, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useToast from "../Hooks/useToast";
import { format } from "date-fns";

const withSearch = (ComponentWrapped) => {
  const newComponent = (props) => {
    const { toastError } = useToast();
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
    const [location, setLocation] = useState(searchParams.get("city") || "");
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
      if (location === "") {
        toastError("please, set input Location");
      } else if (
        format(date[0].startDate, "dd/mm/yyyy") ===
        format(date[0].endDate, "dd/mm/yyyy")
      ) {
        toastError("please, set input Date");
      } else {
        const encodedParams = createSearchParams({
          date: JSON.stringify(date),
          options: JSON.stringify(options),
          location,
        });
        navigate({
          pathname: "/hotels",
          search: encodedParams.toString(),
        });
      }
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
        location={{ location, setLocation }}
        handleSubmit={handleSubmit}
      />
    );
  };
  return newComponent;
};

export default withSearch;
