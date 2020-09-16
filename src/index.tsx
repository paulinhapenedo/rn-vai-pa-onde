import React from 'react';
import {View} from 'react-native';

import Map from './components/map';
import layouts from './styles/layouts';

const App = () => (
  <View style={layouts.container}>
    <Map />
  </View>
);

export default App;
