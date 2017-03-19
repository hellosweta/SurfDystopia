import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.booking;
    this.clearBookingForm = this.clearBookingForm.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.params) {
  //     this.props.fetchBooking(this.props.params.bookingId);
  //   }
  // }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.booking);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  clearBookingForm() {
     this.setState({
       check_in_date: "",
       check_out_date: "",
     });
 }

 renderErrors() {
   return(
     <ul>
       {this.props.errors.map((error, i) => (
         <li key={`error-${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
 }
 componentWillReceiveProps(newProps){
   if (this.props !== newProps && this.props.errors.length > 0) {
     this.props.clearErrors();
   }
 }
  handleSubmit(e) {
    e.preventDefault();
    debugger
    return ((booking) => {
      this.props.createBooking(booking);
      this.clearBookingForm();
    });
  }

  render () {

    return (
      <div className="booking-form">
        <h3>Book</h3>
        <form onSubmit={this.handleSubmit}>
          	{this.renderErrors()}
          <div>

            <span className="check-in">
            <input
              className="standard-input"
              type="date"

              placeholder="Check-In"
              onChange={this.update('check_in_date')} />
            </span>
          </div>
            <span className="check-out">
            <input
              className="standard-input"
              type="date"

              placeholder="Check-Out"
              onChange={this.update('check_out_date')} />
            </span>

          <div>
            <button onClick={this.handleSubmit} className = "form-button" type="submit">Submit</button>
            <button className='header-button' onClick={this.clearBookingForm}>Cancel</button>

          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
