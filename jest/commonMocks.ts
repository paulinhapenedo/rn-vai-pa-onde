/* eslint-disable no-undef */
jest.mock('react-native-maps', () => {
  const React = jest.requireActual('react');
  const MapView = jest.requireActual('react-native-maps');

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }
  MockMapView.propTypes = MapView.propTypes;

  class MockCallout extends React.Component {
    render() {
      return React.createElement('Callout', this.props, this.props.children);
    }
  }
  MockCallout.propTypes = MapView.Callout.propTypes;
  MockMapView.Callout = MockCallout;

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }
  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.Marker = MockMarker;

  class MockPolyline extends React.Component {
    render() {
      return React.createElement('Polyline', this.props, this.props.children);
    }
  }
  MockPolyline.propTypes = MapView.Polyline.propTypes;
  MockMapView.Polyline = MockPolyline;

  return MockMapView;
});
/* eslint-enable */
