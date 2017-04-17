import React from 'react';
import { Link, hashHistory } from 'react-router';
import BookingContainer from './booking_index_container';
import EventCalendar from 'react-event-calendar';

class BookingIndex extends React.Component {
  constructor(props){
    super(props);
    this.displayDelete = this.displayDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings(this.props.listingId);
  }

  displayDelete(booking){
    if (this.props.currentUser && this.props.currentUser.id === booking.user_id) {
      return(<button onClick={() => this.props.deleteBooking(booking)}>Delete</button>);
    }
  }


  render(){
    if (this.props.bookings.length < 1) {
      return(<div><h2>No Upcoming Bookings</h2></div>);
    } else {
      const events = this.props.bookings.map((booking,idx) => (
        <div className={ this.props.currentUser !== null && this.props.currentUser.id === booking.guest.id ? 'booking-guest current-user-guest' : 'booking-guest' } key={idx}>{booking.guest.name}
          <div className={'check-in-out'}>{ booking.check_in_date } to { booking.check_out_date } </div>
            <div>
              {this.displayDelete(booking)}
            </div>
        </div>));

    return(
      <div className={"booking-index-item"}>
        <h2 className="booking-title"> Current Bookings </h2>
        <ul className="bookings">
          {events}
        </ul>
      </div>);
    }
  }
}


export default BookingIndex;
