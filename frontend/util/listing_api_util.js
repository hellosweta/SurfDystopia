export const fetchListings = (regionId) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings`,
    data: {
      region_id: regionId
    }
  });
};

export const fetchAvailableListings = (listing) => {
  const regionId = listing.regionId;
  debugger;

  return $.ajax({
    method: 'POST',
    url: `api/listings/${regionId}/search`,
    data: { listing }
  });
};

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  });
};

export const createListing = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/listings',
    data
  });
};

export const updateListing = (listing) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/listings/${listing.id}`,
    data: { listing }
  });
};

export const deleteListing = (listing) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/listings/${listing.id}`
  });
};
