import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Tooltip,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { listCamping } from "@/api/camping";
const Layers = () => {
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
    <LayersControl>
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Sattellite">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>

      {/* Overlay Layers */}
      <LayersControl.Overlay name="Landmark" checked>
        <LayerGroup>
            {/* read me */}
            {/* หากมีการ Map ให้ใส่ Key unique ที่ element แรกที่ render */}
          {landmarks?.map((item) => {
            return (
              <Marker position={[item.lat, item.lng]} key={item.id}>
                <Popup>
                  {item.title} <br /> {item.description}
                </Popup>
                <Tooltip>
                    {item.title}
                </Tooltip>
              </Marker>
            );
          })}
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default Layers;
