import React from 'react';
import { Link, hashHistory } from 'react-router';
import BookingContainer from './booking_index_container';
import EventCalendar from 'react-event-calendar';

class BookingIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render(){
    if (this.props.bookings.length < 1) {
      return(<div></div>);
    } else {
      const events = this.props.bookings.map((booking,idx) => (
        <div className={ this.props.currentUser.id === booking.guest.id ? 'booking-guest current-user-guest' : 'booking-guest' } key={idx}>{booking.guest.name}
          <li className={'check-in-out'}>{new Date(booking.check_in_date).toDateString()} to {new Date(booking.check_out_date).toDateString()} </li>
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
//     const events = [
//     {
//         start: '2015-07-20',
//         end: '2015-07-02',
//         eventClasses: 'optionalEvent',
//         title: 'test event',
//         description: 'This is a test description of an event',
//     },
//     {
//         start: '2015-07-19',
//         end: '2015-07-25',
//         title: 'test event',
//         description: 'This is a test description of an event',
//         data: 'you can add what ever random data you may want to use later',
//     },
// ];

// return(<EventCalendar
//     month={7}
//     year={2015}
//     events={events}
//     onEventClick={(target, eventData, day) => console.log(eventData)}
//     />);
