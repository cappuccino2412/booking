import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapHome = () => {
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    //first render
    hdlGetLandmarks();
  }, []);

  const hdlGetLandmarks = () => {
    listCamping()
      .then((res) => setLandmarks(res.data.result))
      .catch((err) => console.log(err));
  };

  console.log(landmarks);
  return (
    <div>
      <MapContainer
        className="h-[50vh] w-full rounded-md z-0"
        center={[13, 100]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {landmarks?.map((item,index) => {
          return (
            <Marker position={[item.lat, item.lng]} key={index}>
              <Popup>
                {item.title} <br /> {item.description}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default MapHome;
