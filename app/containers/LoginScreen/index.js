import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {makeSelectDashboard} from './selectors';
import {defaultAction} from './action';

const index = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    props.getTodaysShowsHandler();
  }, []);

  console.log('===>>', props);
  return (
    <SafeAreaView>
      <Text>hello from login SafeAreaView</Text>
    </SafeAreaView>
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
