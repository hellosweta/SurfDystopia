export const fetchReviews = (listingId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}/reviews`,
    data: {
      listing_id: listingId
    }
  });
};

export const fetchReview = (listingId, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}/reviews/${id}`,
  });
};


export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: `/api/listings/${review.listing_id}/reviews`,
    data: { review }
  });
};

export const updateReview = (listingId, review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/listings/${listingId}/reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = (listingId, review) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/listings/${listingId}/reviews/${review.id}`
  });
};
