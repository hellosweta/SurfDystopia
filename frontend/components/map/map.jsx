import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // debugger;

    const mapOptions = {
      center: { lat: this.props.startLat, lng: this.props.startLong },
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  _registerListeners() {

    const _getCoordsObj = latLng => ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }



  _handleMarkerClick(listing) {
    this.props.router.push(`listings/${listing.id}`);
  }

  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "benches/new",
  //     query: coords
  //   });
  // }


  render() {
    return (
      <div className='map-container' ref={map => this.mapNode = map }>
        <h1>Map Placehoder</h1>
      </div>
    );
  }
}

export default withRouter(ListingsMap);
