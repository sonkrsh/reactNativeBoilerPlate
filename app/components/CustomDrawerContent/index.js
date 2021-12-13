/**
 *
 * CustomDrawerContent
 *
 */

import React, {memo, useState} from 'react';

import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';

// import PropTypes from 'prop-types';
import {SIZES} from '../../../constants';

function CustomDrawerContent({navigation}) {
  return (
    <SafeAreaView scrollEnabled={true} style={{flex: 1, width: '95%'}}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Image
          source={{
            uri: 'https://banner2.cleanpng.com/20180423/pzq/kisspng-font-awesome-computer-icons-symbol-cross-eye-5ade20872778c7.0865310415245067591617.jpg',
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
          }}>
          {' '}
          ----- My self Sourav ------
        </Text>
        <Text>-- View My Profile--</Text>
      </View>
      {/* <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('===>>profile')}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}>
            <Text>Sourav Kumar Singh</Text>
            <Text>View My Profile</Text>
          </View>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
}

export default memo(CustomDrawerContent);
