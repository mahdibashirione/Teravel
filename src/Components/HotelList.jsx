import hotels from "../api/hotels";
import { useHotels } from "../context/HotelsProvider";
import HotelCard from "./HotelCard";

const HotelList = () => {
  // const { data, error, isLoading } = useHotels();

  // if (isLoading) return <span className="mt-4 block">Loading ...</span>;
  // if (error) return <span className="mt-4 block">{error}</span>;

  return (
    <article className="w-full">
      <div className="px-4 pb-4 flex flex-col items-center">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.location_id} hotel={hotel} />
        ))}
      </div>
    </article>
  );
};

export default HotelList;
