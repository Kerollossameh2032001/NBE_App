import React from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import constantImages from '../../core/constants/constant_images';
import LoginTemplate from '../../components/templates/login_template/LoginTemplate';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../core/constants/RootStackParamList';

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const LoginScreen = ({ navigation, route }: LoginProps) => {
    return (
        <ImageBackground style={styles.backGroundContainer} source={constantImages.loginBackGround}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.overlay} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <LoginTemplate route={route} navigation={navigation} />
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    backGroundContainer: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
})

