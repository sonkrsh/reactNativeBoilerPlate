/**
 *
 * CustomDrawer
 *
 */

import React, {memo, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Home from '../../containers/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomDrawerContent from '../CustomDrawerContent';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
function CustomDrawer() {
  const [progress, setprogress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          with: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        initialRouteName="Homez"
        drawerContent={props => {
          setTimeout(() => {
            setprogress(props.progress);
          }, 0);

          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="Homez">
          {props => <Home {...props} drawerAnimatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}

export default memo(CustomDrawer);
