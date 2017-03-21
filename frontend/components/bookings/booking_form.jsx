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
    console.log(this.props.errors);
    if (!this.props.errors) {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.createBooking(this.state);
  }

  assignListingId(){
    this.setState({
      listing_id: this.props.listingId
    });
  }

  render () {
    return (
      <div className="booking-form">
        <form onSubmit={this.handleSubmit}>
          <ul className="errors">
            {this.renderErrors()}
          </ul>
          <article className="booking-form-dates group">
            <div>
              <span className="check-in">
                <h3 className="check-in-text">Check In</h3>
              <input
                className="standard-input"
                type="date"
                value={this.state.check_in_date}
                placeholder="Check-In"
                onChange={this.update('check_in_date')} />
              </span>
            </div>
              <span className="check-out">
                  <h3 className="check-out-text">Check Out</h3>
              <input
                className="standard-input"
                type="date"
                value={this.state.check_out_date}
                placeholder="Check-Out"
                onChange={this.update('check_out_date')} />
              </span>
            </article>


          <div>
            <button onClick={this.handleSubmit} className = "form-button" type="submit">Request</button>
            <button className='header-button' onClick={this.clearBookingForm}>Cancel</button>

          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
