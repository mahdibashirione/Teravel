import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import hotels from "../api/hotels";
import { Link, useSearchParams } from "react-router-dom";
import L from "leaflet";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [markers, setMarkers] = useState([]);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className="h-[calc(100vh-72px)] sticky top-[72px]">
      <MapContainer
        className="h-full z-10"
        center={[lat || 12.954279, lng || 100.88316]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <button className="absolute left-4 bottom-4 z-20 bg-primary rounded p-1.5">
          Use Your Location
        </button>
        <ChangeCenter position={[lat || 12.954279, lng || 100.88316]} />
        {hotels.map((hotel) => {
          const positionHotel = [lat, lng];
          return (
            <Marker
              icon={L.icon({
                iconUrl: "/redpin.png",
                iconSize:
                  positionHotel[0] === hotel.latitude ? [52, 52] : [36, 36],
              })}
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
    </div>
  );
};

export default Map;

function ChangeCenter({ position, icon }) {
  const map = useMap();
  map.setView(position);
}
