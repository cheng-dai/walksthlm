'use client';
import {APIProvider, Map as GoogleMap, AdvancedMarker, MapControl, ControlPosition, Pin} from '@vis.gl/react-google-maps';

export default function Map() {
  const position = {lat: 59.34690277895678, lng: 18.07236704154113};


  return (
    <div className='w-[300px] md:w-[400px] aspect-square '>

   
    <APIProvider apiKey={process.env.GOOGLE_MAP_API_KEY as string} >
      

      <GoogleMap defaultCenter={position} defaultZoom={17} mapId={'fa0aec0ced6a481d'} style={{borderRadius:'0.375rem'}}>
      <MapControl position={ControlPosition.LEFT_BOTTOM}>
        <a className='text-[#FBFBFB] bg-[#658C6F] text-lg md:text-xl px-2 py-1 shadow-md rounded-md ml-2 ' href='KTH Entré
08-790 80 00
https://maps.app.goo.gl/EpRdKdTgTtfZ64Qo8?g_st=ic' target='_blank'>Open In App</a>
      </MapControl>
        <AdvancedMarker position={position} >
        <Pin background={'#658C6F'} glyphColor={'#fff'} borderColor={'#658C6F'} scale={1.2}/>
        </AdvancedMarker>
      </GoogleMap>
      
      
    </APIProvider>
    </div>
  );
}

