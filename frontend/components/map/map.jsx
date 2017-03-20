import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class ListingsMap extends React.Component {
  constructor(props){
    super(props);
    this._registerListeners = this._registerListeners.bind(this);
  }


  componentDidMount() {
    const _mapOptions = {
      center: { lat: this.props.startLat, lng: this.props.startLong },
      zoom: 13,
      streetViewControl: false,
      overviewMapControl: true,
      mapTypeControl: false
    };
    const map = this.refs.map;

    this.map = new google.maps.Map(map, _mapOptions);

  //   this.map.mapTypes.set('No Labels', nolabelMapType);
  //  this.map.setMapTypeId('No Labels');
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  _registerListeners() {

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      // this.props.updateFilter('bounds', bounds);
    });

    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }



  _handleMarkerClick(listing) {
    this.props.router.push(`search/${listing.region_id}/${listing.id}`);
  }

  render() {
    return (
      <div className='map-container' ref="map">

      </div>
    );
  }
}

export default withRouter(ListingsMap);
