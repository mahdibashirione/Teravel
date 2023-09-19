import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import hotels from "../api/hotels";
import { useLocation, useSearchParams } from "react-router-dom";

const Map = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapCenter, setMapCenter] = useState([12.954279, 100.88316]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    searchParams.get("lat") &&
      setMapCenter([searchParams.get("lat"), searchParams.get("lng")]);
    setMarkers(hotels);
  }, [pathname]);

  return (
    <MapContainer
      className="h-full"
      center={mapCenter}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      {hotels.map((hotel) => {
        return (
          <Marker
            key={hotel.location_id}
            position={[hotel.latitude, hotel.longitude]}
          >
            <Popup>
              {hotel.name}
              <br />
              {hotel.price.split(" ")[0]}/nights
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
