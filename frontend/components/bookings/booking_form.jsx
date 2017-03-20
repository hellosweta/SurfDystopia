import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assignListingId = this.assignListingId.bind(this);
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
   if ((this.props.errors.length < 1) || (this.props.errors === undefined)) {
     return(<div></div>);
   } else {
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
 }
 componentWillReceiveProps(newProps){
   if (this.props !== newProps && this.props.errors.length > 0) {
     this.props.clearErrors();
   }
 }
  handleSubmit(e) {
    e.preventDefault();
    // this.assignListingId();

    this.props.createBooking(this.state);
    this.clearBookingForm();
  }
  assignListingId(){
    this.setState({
      listing_id: this.props.listingId
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
              value={this.state.check_in_date}
              placeholder="Check-In"
              onChange={this.update('check_in_date')} />
            </span>
          </div>
            <span className="check-out">
            <input
              className="standard-input"
              type="date"
              value={this.state.check_out_date}
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
