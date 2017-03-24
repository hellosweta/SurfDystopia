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
      debugger;
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
        <form>
          <article className="availability-search group">
            {this.renderErrors()}
            <span className="check-in-search">
              <span className="availability-search-label">Check In: </span>
              <input
                className="standard-input"
                type="date"
                value={this.state.check_in_date}
                placeholder="Check-In"
                onChange={this.update('check_in_date')}
              />
            </span>
            <span className="check-out-search" style={{marginLeft: '8px'}}>
              <span className="availability-search-label">Check Out: </span>
              <input
                className="standard-input"
                type="date"
                value={this.state.check_out_date}
                placeholder="Check-Out"
                onChange={this.update('check_out_date')}
              />
            </span>
            <div style={{paddingTop: '18px', marginLeft: '18px'}}>
              <button onClick={this.handleSubmit} className = "form-button">Search</button>
              {/*<button className='header-button' onClick={this.clearBookingForm}>Cancel</button>*/}
            </div>
          </article>
        </form>
      </div>
    );
  }
}

export default withRouter(AvailabiltySearchBar);
