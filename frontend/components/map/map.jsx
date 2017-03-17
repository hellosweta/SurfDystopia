import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class ListingsMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: this.props.startLat, lng: this.props.startLong },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }


  render() {
    return (
      <div className='map-container' ref={map => this.mapNode = map }>
        <h1>Map Placehoder</h1>
      </div>
    );
  }
}

export default ListingsMap;
