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
import Animated from 'react-native-reanimated';

export function Home({drawerAnimatedStyle}) {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimatedStyle,
      }}>
      <Text>Homess</Text>
    </Animated.View>
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
