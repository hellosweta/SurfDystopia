import { connect } from 'react-redux';
import DateRangePicker from './DateRangePickerWrapper';

const mapStateToProps = (state) => {
  return ({
  
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangePicker);
