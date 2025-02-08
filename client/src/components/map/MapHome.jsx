import { MapContainer } from "react-leaflet";
import Layers from "./Layers";

const MapHome = () => {
  return (
    <div className="m-3 md:mx-8">
      <MapContainer
        className="h-[50vh] w-full rounded-md z-0"
        center={[13.67, 100.55]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <Layers />
      </MapContainer>
    </div>
  );
};
export default MapHome;
