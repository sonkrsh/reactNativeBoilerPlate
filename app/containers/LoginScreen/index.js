import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {makeSelectDashboard} from './selectors';
import {defaultAction} from './action';

const index = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    props.getTodaysShowsHandler();
  }, []);

  return (
    <View>
      <Text>hello from login View</Text>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});
function mapDispatchToProps(dispatch) {
  return {
    getTodaysShowsHandler: payload => dispatch(defaultAction()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
