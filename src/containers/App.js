import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rcply from '../components/Rcply';
import { mockAction } from '../actions/mockAction';

function mapStateToProps(state) {
  return {
    mockRecipe: state.mock
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(mockAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rcply);
