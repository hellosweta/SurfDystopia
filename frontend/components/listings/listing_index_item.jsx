import React from 'react';
import { hashHistory } from 'react-router';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }



  handleClick() {
    const listingId = this.props.listing.id;
    const regionId = this.props.listing.region_id;
    hashHistory.push(`/search/${regionId}/${listingId}`);
  }

  render() {
    const { title, description, region_id, host_id, image_url, latitude, longitude, max_guests, property_type, house_rules } = this.props.listing;

    return (
      <div onClick={this.handleClick}>
        <div className="index-item-info">
          <img className="listing-index-image" src={image_url}/>
          <div className="listing-title">
            {title}
          </div>
           <div className="listing-property_type">
             {property_type}
           </div>
        </div>
      </div>
    );
  }
}

export default ListingIndexItem;
