import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
// import MarkerManager from '../../util/marker_manager';
//

class Map extends React.Component {

  componentDidMount() {
    const _getCoordsObj = latLng => ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  // componentDidUpdate() {
  //   if(this.props.singleBench){
  //     this.MarkerManager.updateMarkers([this.props.benches[Object.keys(this.props.benches)[0]]]); //grabs only that one bench
  //   } else {
  //     this.MarkerManager.updateMarkers(this.props.benches);
  //   }
  // }
  //
  // _registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat:north, lng: east },
  //       southWest: { lat: south, lng: west } };
  //     this.props.updateFilter('bounds', bounds);
  //   });
  //   google.maps.event.addListener(this.map, 'click', event => {
  //     const coords = _getCoordsObj(event.latLng);
  //     this._handleClick(coords);
  //   });
  // }
  //
  // _handleMarkerClick(bench) {
  //   this.props.router.push(`benches/${bench.id}`);
  // }
  //
  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "benches/new",
  //     query: coords
  //   });
  // }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map }></div>
    )
  }
}

export default withRouter(Map);
