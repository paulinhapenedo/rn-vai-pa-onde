import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

const useMap = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    })();
  }, []);

  return {};
};

export default useMap;
