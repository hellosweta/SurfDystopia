import React from 'react';
import { hashHistory } from 'react-router';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.hightlightMarker = this.hightlightMarker.bind(this);
  }

  // hightlightMarker(e){
  //   google.maps.event.trigger(marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'),'mouseover');
  // }

  // }
  //
  // marker.addListener('mouseover', () => );

  handleClick() {
    const listingId = this.props.listing.id;
    const regionId = this.props.listing.region_id;
    hashHistory.push(`/listings/${listingId}`);
  }


  render() {
    const { title, description, region_id, host_id, image_url, latitude, longitude, max_guests, property_type, average_rating, review_count } = this.props.listing;

    let reviewText;

    let reviewCount = review_count;

    if (review_count > 1) {
      reviewText = "Reviews";
    } else if (review_count === 0) {
      reviewText = "Not yet reviewed";
      reviewCount = '';
    } else {
      reviewText = "Review";
    }

    return (
      <div onClick={this.handleClick} >
        <div className="index-item-info">
          <img className="listing-index-image" src={image_url}/>
          <div className="listing-index-title">
            { title }
          </div>
          <div className="listing-property_type">
            {property_type}
          </div>
          <div className="index-rating">
            {"⚙ ".repeat(average_rating)}
            <span className="index-review-count"> {reviewCount} {reviewText} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingIndexItem;
