import { View, Text, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { appInfo } from "../constants/appInfo";
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/image/background.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{ flex: 1 }}>
      <Image
        source={require('../assets/image/splash-img.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={20}/>
      <ActivityIndicator color={appColors.gray} size={22}/>
    </ImageBackground>
  );
};

export default SplashScreen