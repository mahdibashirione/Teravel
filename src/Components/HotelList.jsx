import { Link, useSearchParams } from "react-router-dom";
import useFeatch from "../Hooks/useFeatch";
import hotels from "../api/hotels";

const HotelList = () => {
  // state
  const [seachParams, setSearchParams] = useSearchParams();
  // Params
  const options = JSON.parse(seachParams.get("options"));
  const date = JSON.parse(seachParams.get("date"));
  const city = seachParams.get("city");
  // Featch
  // const { data, isLoading, error } = useFeatch(
  //   "https://travel-advisor.p.rapidapi.com/hotels/list",
  //   options
  // );

  // if (isLoading) return <span className="mt-4 block">Loading ...</span>;
  // if (error) return <span className="mt-4 block">{error}</span>;

  return (
    <article className="w-full h-full">
      <div className="h-full flex flex-col gap-y-3 p-4 overflow-y-scroll">
        {hotels.map((hotel) => {
          hotel.photo.images && console.log(hotel.photo.images.small.url);
          return (
            <Link
              to={hotel.location_id}
              className="flex bg-white rounded-xl overflow-hidden shadow"
            >
              <div className="w-[200px] h-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={hotel.photo.images.original.url}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="flex-1 h-full">
                <div></div>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default HotelList;
