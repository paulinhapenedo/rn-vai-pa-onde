import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import layouts from '../../styles/layouts';

const Map = () => (
  <MapView
    provider={PROVIDER_GOOGLE}
    style={layouts.container}
    region={{
      latitude: -23.5963,
      longitude: -46.5724,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
    showsUserLocation
    loadingEnabled
  />
);

export default Map;
