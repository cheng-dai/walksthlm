'use client';
import {APIProvider, Map as GoogleMap, AdvancedMarker, MapControl, ControlPosition, Pin} from '@vis.gl/react-google-maps';

export default function Map() {
  const position = {lat: 59.38129108305462, lng: 18.00121970985063};
  

  return (
    <div className='w-[300px] md:w-[400px] aspect-square rounded-lg '>

   
    <APIProvider apiKey={process.env.GOOGLE_MAP_API_KEY as string}>
      <GoogleMap defaultCenter={position} defaultZoom={17} mapId={'fa0aec0ced6a481d'}>
      <MapControl position={ControlPosition.LEFT_BOTTOM}>
        <a className='text-black bg-white text-xl px-2 py-1 shadow-md rounded-md ml-2' href='https://maps.app.goo.gl/T6eZJh7kEqbkn3Yw9' target='_blank'>Open In App</a>
      </MapControl>
        <AdvancedMarker position={position} >
        <Pin background={'#658C6F'} glyphColor={'#fff'} borderColor={'#658C6F'} scale={1.5}/>
        </AdvancedMarker>
      </GoogleMap>
    </APIProvider>
    </div>
  );
}

