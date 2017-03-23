export const fetchBookings = (listingId) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings`,
    data: {
      booking: {
        listing_id: listingId
      }
    }
  });
};

export const fetchBooking = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`,
  });
};


export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: {booking}
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
