import React from 'react';
import { withRouter } from 'react-router';

class AvailabiltySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in_date: "",
      check_out_date: "",
      regionId: this.props.regionId,
      errors: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearBookingForm = this.clearBookingForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
      errors: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.check_in_date === "" || this.state.check_out_date === "") {
      this.setState({ errors: true });
    } else {
      console.log("state");
      console.log(this.state);
      this.props.fetchAvailableListings(this.state);
      this.setState({ check_in_date: "",
        check_out_date: "",
        regionId: this.props.regionId,
        errors: false
      });
    }
  }

  renderErrors(){
    return(this.state.errors ? (<div><h3>Check-In and Check-Out Required</h3></div>) : (<div></div>));
  }

  render() {

    return (
      <div className='availability'>
      <form onSubmit={this.handleSubmit}>
        <article className="availability-search group">
          {this.renderErrors()}
          <div>
            <span className="check-in-search">
              <h3 className="check-in-text-search">Check In</h3>
            <input
              className="standard-input"
              type="date"
              value={this.state.check_in_date}
              placeholder="Check-In"
              onChange={this.update('check_in_date')} />
            </span>
          </div>
            <span className="check-out-search">
                <h3 className="check-out-text-search">Check Out</h3>
            <input
              className="standard-input"
              type="date"
              value={this.state.check_out_date}
              placeholder="Check-Out"
              onChange={this.update('check_out_date')} />
            </span>
            <div>
              <button onClick={this.handleSubmit} className = "form-button" type="submit">Search</button>
              <button className='header-button' onClick={this.clearBookingForm}>Cancel</button>
            </div>
          </article>

      </form>
    </div>
    );
  }
}

export default withRouter(AvailabiltySearchBar);
