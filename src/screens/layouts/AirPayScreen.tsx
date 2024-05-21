import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, PanResponderGestureState, Image, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../core/constants/constant_images'
import DetailsCard from '../../components/organisms/home_oraganisms/DetailsCard'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from '../../App';
import AppBar from '../../components/organisms/global_organisms/AppBar';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';
import DragableComponent from '../../components/molecules/airPay_molecule/DragableComponent';
import CustomButton from '../../components/atoms/global_atoms/CustomButton';
import FingerPrint from '../../components/atoms/login_atoms/FingerPrint';
import AirPayTemplate from '../../components/templates/air_pay_template/AirPayTemplate';



const Drawer = createDrawerNavigator();

export const AirPayScreenWithDrawer = () => {
    const theme = useContext(ThemeContext);
    return (
        <Drawer.Navigator
            initialRouteName='AirPayScreen'
            drawerContent={DrawerContent}
            screenOptions={{
                drawerStyle: {
                    padding: '3%',
                    borderTopEndRadius: 40,
                    borderBottomEndRadius: 40,
                    backgroundColor: theme?.ThemeData.colors.backgroundColor
                }
            }}>
            <Drawer.Screen name='AirPayScreen' component={AirPayScreen}
                options={{
                    headerShown: false
                }} />
        </Drawer.Navigator>
    );
}


type dataItemType = {
    id: number;
    image: any; // Use appropriate type for image if you know it, e.g., ImageSourcePropType
};



const AirPayScreen = () => {
    const navigation = useNavigation<any>();
    const theme = useContext(ThemeContext);

    return (
        <View style={[theme?.ThemeData.containerStyles.layoutTemplateContainer, { flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
            <CustomStatusBar />
            <AppBar openDrawer={() => {
                console.log('kerol');
                navigation.dispatch(DrawerActions.toggleDrawer())
            }} />
            <AirPayTemplate />
        </View>
    )
}

export default AirPayScreen


