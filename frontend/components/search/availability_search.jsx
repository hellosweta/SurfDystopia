import React from 'react';
import { withRouter } from 'react-router';

class AvailabiltySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in_date: "",
      check_out_date: "",
      regionId: this.props.regionId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearBookingForm = this.clearBookingForm.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.toggleList = this.toggleList.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  clearBookingForm(e) {
    e.preventDefault();
    this.setState({
      check_in_date: "",
      check_out_date: "",
      listing_id: this.props.listingId,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchAvailableListings(this.state);
    this.setState({ check_in_date: "",
                    check_out_date: "",
                    listingId: this.props.listingId });
  }

  // handleChange(e) {
  //   this.props.fetchSearchLocations(e.currentTarget.value);
  //   this.setState({ [e.currentTarget.name]: e.currentTarget.value} );
  // }

  // handleClick(local) {
  //   this.setState({address: local });
  // }

  render() {
    // const locations = this.props.locations.map((local, idx)=>{
    //   return(
    //     <li key={idx} onClick={ () => this.handleClick(local) }>
    //       {local}
    //     </li>
    //   );
    // });
    return (
      <div className='availability-search'>
      <form onSubmit={this.handleSubmit}>

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

export default withRouter(AvailabiltySearchBar);
