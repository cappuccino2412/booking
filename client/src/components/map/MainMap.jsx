import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { set } from "react-hook-form";

//Docs  https://react-leaflet.js.org/docs/v4/example-events/
function LocationMarker({ position, setPosition, setValue }) {
  // const [position, setPosition] = useState(null) ย้ายไปใช้ใน MainMap แล้วทำการส่ง props มาใช้
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng);
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const MainMap = ({ register, location, setValue }) => {
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13.67, 100.55];

  return (
    <div>
      {register && (
        <>
          <input hidden {...register("lat")} />
          <input hidden {...register("lng")} />
        </>
      )}

      <h1 className="font-semibold mt-4">Where are you?</h1>
      {
        position && 
        <p className="text-sm text-gray-500">
          Coordinated: {position.lat},{position.lng}
        </p>
      }
      <MapContainer
        className="h-[50vh] rounded-md z-0"
        center={location || DEFAULT_LOCATION}
        zoom={10}
        scrollWheelZoom={true}
      >
        <LayersControl>
          <LayersControl.BaseLayer name="stadiamaps" checked>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="openstreetmap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};
export default MainMap;
