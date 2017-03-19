export const fetchBookings = (listingId) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings`,
    data: {
      listing_id: listingId
    }
  });
};

export const fetchBooking = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`,
  });
};


export const createBooking = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  });
};

export const updateBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: {booking}
  });
};

export const deleteBooking = (booking) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${booking.id}`
  });
};
