import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <Link
      to={`${hotel.location_id}/?id=${hotel.location_id}&lat=${hotel.latitude}&lng=${hotel.longitude}`}
      className="flex flex-col bg-white rounded-3xl p-4 shadow-main mt-4 border w-fit gap-y-4"
    >
      {/* Cover */}
      <div className="w-[240px] h-[160px] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={hotel.photo.images.original.url}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center max-w-[240px]">
        {/* Name & Location */}
        <div>
          <span className="font-bold">{hotel.name}</span>
          <p className="flex text-sm gap-0.5 line-clamp-1 text-gray-400">
            <FaMapMarkerAlt className="mt-0.5" />
            {hotel.location_string}
          </p>
        </div>
        {/* Rating */}
        <div className="flex text-sm text-[#AEAEAE]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-orange-400"
              d="M12.3122 15C12.2069 15.0004 12.1042 14.9676 12.0187 14.9063L7.99966 11.9925L3.9806 14.9063C3.89474 14.9685 3.79129 15.0019 3.68522 15.0015C3.57915 15.0011 3.47595 14.967 3.39054 14.9041C3.30513 14.8412 3.24193 14.7528 3.21009 14.6516C3.17825 14.5504 3.17942 14.4417 3.21341 14.3413L4.78091 9.69844L0.718413 6.9125C0.630416 6.85223 0.564002 6.76539 0.528872 6.66468C0.493743 6.56397 0.491741 6.45466 0.523158 6.35273C0.554575 6.2508 0.617764 6.16159 0.703494 6.09813C0.789224 6.03467 0.893001 6.00028 0.999663 6H6.01154L7.52404 1.34532C7.55662 1.24482 7.6202 1.15723 7.70564 1.09511C7.79109 1.03299 7.89402 0.999527 7.99966 0.999527C8.10531 0.999527 8.20823 1.03299 8.29368 1.09511C8.37913 1.15723 8.44271 1.24482 8.47529 1.34532L9.98779 6.00157H14.9997C15.1065 6.00151 15.2105 6.03566 15.2964 6.099C15.3824 6.16233 15.4459 6.25154 15.4775 6.35355C15.5091 6.45556 15.5072 6.56501 15.4721 6.66587C15.437 6.76674 15.3706 6.85371 15.2825 6.91407L11.2184 9.69844L12.785 14.34C12.8104 14.4152 12.8175 14.4953 12.8058 14.5737C12.7941 14.6522 12.7639 14.7267 12.7177 14.7912C12.6715 14.8557 12.6107 14.9082 12.5401 14.9445C12.4696 14.9809 12.3915 14.9999 12.3122 15Z"
            />
          </svg>
          {hotel.hotel_class}
          <p className="ml-1">({hotel.num_reviews})</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {/* Price */}
        <span className="font-bold text-xl">{hotel.price.split(" ")[0]}</span>
        <p>Nights</p>
      </div>
    </Link>
  );
};

export default HotelCard;
