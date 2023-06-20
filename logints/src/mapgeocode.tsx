import {MapContainer,TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import L from "leaflet";
import LeafletGeocoder from "./LeafletGeocoder";


export default function Map(){
  const position = [51.505, -0.09]

  return(
    <>
<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
</MapContainer>
    </>
  )
}
let DefaultIcon = L.icon({
  iconUrl:"https://unpkg.com.leaflet@1.6/dist/images/marker-icon.png"
})
L.Marker.prototype.options.icon = DefaultIcon;



        
// (
  
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
  
// )
