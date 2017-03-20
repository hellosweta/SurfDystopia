export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromListing = this._createMarkerFromListing.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(listings){
    this.listings = listings;
    this._listingsToAdd().forEach(this._createMarkerFromListing);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _listingsToAdd() {
    const currentListings = this.markers.map( marker => marker.listingId );
    return this.listings.filter( listing => !currentListings.includes(listing.id) );
  }

  _markersToRemove(){
    const listingIds = this.listings.map( listing => listing.id );
    return this.markers.filter( marker => !listingIds.includes(marker.listingId) );
  }

  _createMarkerFromListing(listing) {
    const pos = new google.maps.LatLng(listing.latitude, listing.longitude);
 //    const icon = {
 //      url: 'https://s3.amazonaws.com/surf-dev/map/map_marker.png',
 //      // This marker is 20 pixels wide by 32 pixels high.
 //   size: new google.maps.Size(20, 32),
 //   // The origin for this image is (0, 0).
 //   origin: new google.maps.Point(0, 0),
 //   // The anchor for this image is the base of the flagpole at (0, 32).
 //   anchor: new google.maps.Point(0, 32)
 // };
    const marker = new google.maps.Marker({
      position: pos,
      // icon: icon,
      draggable: true,
      map: this.map,
      listingId: listing.id
    });
    marker.addListener('click', () => this.handleClick(listing));
    marker.addListener('mouseover', () => this.toggleBounce(marker));
    this.markers.push(marker);
  }

  toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
