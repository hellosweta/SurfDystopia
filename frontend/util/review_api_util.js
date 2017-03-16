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
