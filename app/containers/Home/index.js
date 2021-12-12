/**
 *
 * Home
 *
 */

import React, {memo} from 'react';
import {connect} from 'react-redux';
import {Text, View, SafeAreaView} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import makeSelectHome from './selectors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function Home() {
  return (
    <SafeAreaView>
      <Text>Homess</Text>
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
