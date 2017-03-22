import React from 'react';
import { DateRangePicker } from 'react-dates';
import { withRouter } from 'react-router';


class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleSubmit(e) {
      e.preventDefault();

  }

  render() {

    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div className="date-range-picker">
          <DateRangePicker
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
          <br />

      </div>
    );
  }
}

export default withRouter(DateRangePickerWrapper);
