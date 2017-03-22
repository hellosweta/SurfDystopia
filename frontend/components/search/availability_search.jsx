import React from 'react';
import { withRouter } from 'react-router';

class HomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "", visible: "hidden", startDate: "", endDate: "",
      errors: "Location"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchLocations("");
  }

  toggleList() {
    const css = this.state.visible === "hidden" ? "visible" : "hidden";
    this.setState({ visible: css });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push(`/search/${this.state.address}/${this.state.startDate}/${this.state.endDate}`);
    this.setState({ address: "", visible: "hidden" });
  }

  handleChange(e) {
    this.props.fetchSearchLocations(e.currentTarget.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value} );
  }

  handleClick(local) {
    this.setState({address: local });
  }

  render() {
    const locations = this.props.locations.map((local, idx)=>{
      return(
        <li key={idx} onClick={ () => this.handleClick(local) }>
          {local}
        </li>
      );
    });
    return (
      <form className="home-search-form group" onSubmit={this.handleSubmit}>
        <div className="search-bar-home-input">
          <label>Where</label>
          <input onClick={this.toggleList} type="text"
            placeholder= {this.state.errors} name="address"
            onChange={ this.handleChange } value={ this.state.address }/>
          <ul className ={`location-dropdown-home ${this.state.visible}`}>{locations}</ul>
        </div>
        <div className="search-bar-home-input">
          <label>When</label>
          <input type="date"  name="startDate"
            onChange={ this.handleChange } value={ this.state.startDate }/>
          <input type="date"  name="endDate" min={this.state.startDate}
            onChange={ this.handleChange } value={ this.state.endDate }/>
        </div>
        <div className='search-bar-home-input'>
          <input type="submit" value="Search" className="home-search-button-bar"/>
        </div>
      </form>
    );
  }
}

export default withRouter(HomeSearchBar);
