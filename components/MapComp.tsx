'use client';

import { useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import { InfoCardData } from '../typings';

type searchProps = {
  searchResults: Array<InfoCardData>;
};

function MapComp({ searchResults }: searchProps) {
  const coord: any= searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center: any = getCenter(coord);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <section className="hidden xl:inline-flex xl:min-w-[600px]">
      <Map
         {...viewState}
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle='mapbox://styles/crtd-lunacy/clb7tx07h000514kfzw4zz6ns'
        style={{width: '100%', height: '100%'}}
        onMove={evt => setViewState(evt.viewState)}
      >
      </Map>
    </section>
  )
}

export default MapComp
