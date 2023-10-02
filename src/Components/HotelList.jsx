import hotels from "../api/hotels";
import { useHotels } from "../context/HotelsProvider";
import HotelCard from "./HotelCard";

const HotelList = () => {
  // const { data, error, isLoading } = useHotels();

  // if (isLoading) return <span className="mt-4 block">Loading ...</span>;
  // if (error) return <span className="mt-4 block">{error}</span>;

  return (
    <article className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.location_id} hotel={hotel} />
        ))}
      </div>
    </article>
  );
};

export default HotelList;
