import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as appActions from '../actions/appActions';

import Layout from './Layout';

function mapStateToProps(state) {
  console.log(state);
  return {
    jokes: state.jokes.jokes,
    ratings: state.jokes.ratings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default Main;
