import React from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';
import { appInfo } from '../constants/appInfo';

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
      <Image source={require('../assets/image/splash.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={10} />
      <ActivityIndicator color={appColors.gray} size={30} />
    </ImageBackground>
  );
};

export default SplashScreen