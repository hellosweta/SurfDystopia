import React from 'react';
import { Link } from 'react-router';
import RegionIndexItem from './region_index_item';

class RegionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRegions();
  }

  render() {
    return (
      <div className="regions">
        <ul>
          {
            this.props.regions.map(region => (
              <RegionIndexItem
                key={region.id}
                region={region} onClick={() => this.props.fetchListings(region.id)}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default RegionIndex;
