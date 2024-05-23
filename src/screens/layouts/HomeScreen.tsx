import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../App';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import {RootDrawerParamList } from '../../core/constants/RootStackParamList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TransferScreen from './TransferScreen';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';

import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';
import HomeTempate from '../../components/templates/home_template/HomeTempate';

export type HomeProps = NativeStackScreenProps<RootDrawerParamList, 'HomeScreen'>

const Drawer = createDrawerNavigator();

export const HomeScreenWithDrawer = () => {
    const theme = useContext(ThemeContext);
    return (
        <Drawer.Navigator
            initialRouteName='HomeScreen'
            drawerContent={DrawerContent}
            screenOptions={{
                drawerStyle: {
                    padding: '3%',
                    borderTopEndRadius: 40,
                    borderBottomEndRadius: 40,
                    backgroundColor: theme?.ThemeData.colors.backgroundColor
                }
            }}>
            <Drawer.Screen name='HomeScreen' component={HomeScreen}
                options={{
                    headerShown: false
                }} />
        </Drawer.Navigator>
    );
}

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const theme = useContext(ThemeContext);

    return (
        <View style={[theme?.ThemeData.containerStyles.layoutTemplateContainer, { flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
            <CustomStatusBar />
            <HomeTempate openDrawer={() => {
                console.log('kerol');
                navigation.dispatch(DrawerActions.toggleDrawer())
            }} />
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({


})