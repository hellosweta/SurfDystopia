import React from 'react';
import { Link, hashHistory } from 'react-router';
import BookingContainer from './booking_index_container';
import EventCalendar from 'react-event-calendar';



class BookingIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const events = this.props.bookings.map((booking,idx) => (
      <div key={idx}>{booking.guest.name}
        <li>{booking.check_in_date._d} to {booking.check_out_date} </li>

        </div>));
    return(<div>
      <h2>This Lisiting is Currently Booked for: </h2>
      <ul>
        {events}
      </ul>
    </div>);
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
