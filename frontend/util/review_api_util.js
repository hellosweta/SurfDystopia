export const fetchReviews = (listingId) => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews`,
    data: {
      listing_id: listingId
    }
  });
};

export const fetchReview = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`,
  });
};


export const createReview = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {review}
  });
};

export const deleteReview = (review) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${review.id}`
  });
};
