import React from 'react';
import { hashHistory } from 'react-router';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   const listingId = this.props.listing.id;
  //   hashHistory.push(`search/${listingId}`);
  // }

  render() {
    const { title, description, region_id, host_id, image_url, latitude, longitude, max_guests, property_type, house_rules } = this.props.listing;

    return (
      <div className="listing-index-item col col-1-3"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <img className="listing-image" src={image_url}/>
          <span className="listing-index-item-title">Title: </span>
          <span>
            {title}
          </span>
          <span className="listing-index-item-description">Description: </span>
          <span >{description}</span>
        </div>
      </div>
    );
  }
}

export default ListingIndexItem;
