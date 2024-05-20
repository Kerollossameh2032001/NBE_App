import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell, faFile } from '@fortawesome/free-regular-svg-icons';
import { faMoneyCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import constantImages from '../../core/constants/constant_images';
import { ThemeContext } from '../../App';
import DisplayAccountTitle from '../../components/molecules/global_molecules/DisplayAccountTitle';
import NotificationButton from '../../components/atoms/global_atoms/NotificationButton';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import {RootDrawerParamList } from '../../core/constants/RootStackParamList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TransferScreen from './TransferScreen';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';
import ChartIcon from '../../components/atoms/global_atoms/drawer_setting_icon/chartIcon';
import CertificateIcon from '../../components/atoms/global_atoms/drawer_setting_icon/CertificateIcon';
import Payment from '../../components/atoms/global_atoms/drawer_setting_icon/Payment';
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