import { MapContainer } from "react-leaflet";
import Layers from "./Layers";

const MapHome = () => {
  return (
    <div>
      <MapContainer
        className="h-[50vh] w-full rounded-md z-0"
        center={[13, 100]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <Layers />
      </MapContainer>
    </div>
  );
};
export default MapHome;
