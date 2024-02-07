import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../../styles/globalStyle'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appInfo'
import { appColors } from '../../constants/appColors'

const OnboardingScreen = ({ navigation }: any) => {
    const [index, setIndex] = useState(0);
    return (
        <View style={[globalStyle.container]}>
            <Swiper style={{}} loop={false} onIndexChanged={num => setIndex(num)}
                index={index}
                activeDotColor={appColors.primary}>
                <Image source={require('../../assets/image/onboarding-1.png')}
                    style={{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
                <Image source={require('../../assets/image/onboarding-2.png')}
                    style={{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
                <Image source={require('../../assets/image/onboarding-3.png')}
                    style={{
                        flex: 1,
                        width: appInfo.sizes.WIDTH,
                        height: appInfo.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
            </Swiper>
            <View style={{
                paddingHorizontal: 16,
                paddingVertical: 20,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.text]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
                    <Text style={[styles.text]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    text: {
        color: appColors.primary,
        fontSize: 20,
        fontWeight: '500',
    }
})