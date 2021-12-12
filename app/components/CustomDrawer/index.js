/**
 *
 * CustomDrawer
 *
 */

import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Home from '../../containers/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();
function CustomDrawer() {
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
        initialRouteName="Homez">
        <Drawer.Screen name="Homez">
          {props => <Home {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}

export default memo(CustomDrawer);
