import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react'
import HomeScreen, { HomeScreenWithDrawer } from './HomeScreen';
import { RootBottomTabParamList, RootDrawerParamList } from '../../core/constants/RootStackParamList';
import TransferScreen from './TransferScreen';
import AirPayScreen, { AirPayScreenWithDrawer } from './AirPayScreen';
import { LanguageContext, ThemeContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AirPayIcon from '../../components/atoms/global_atoms/AirPayIcon';
import BeneficiariesScreen, { BeneficiariesScreenWithDrawer } from './BeneficiariesScreen';
import ATMsScreen from './ATMsScreen';
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();


const Layout = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerTransparent: true,
                title: '',
                tabBarActiveBackgroundColor: theme?.ThemeData.colors.primary,
                tabBarInactiveBackgroundColor: theme?.ThemeData.colors.backgroundColor,
                tabBarStyle: {
                    height: '10%',
                    backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor,
                    borderWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    borderRadius: 16,
                    height: 70,
                    marginVertical: '2%',
                    marginHorizontal: '2%',
                    padding: '3%',
                },
                tabBarActiveTintColor: theme?.ThemeData.textStyle.bodySmall.color,
                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name === 'HomeWithDrawerScreen') {
                        return <FontAwesomeIcon icon={faHouse} color={focused ? theme?.ThemeData.colors.textColor : color} size={size} />
                    } else if (route.name === 'TransferScreen') {
                        return <FontAwesomeIcon
                            icon={faPaperPlane}
                            color={focused ? theme?.ThemeData.colors.textColor : color}
                            size={size}
                        />
                    } else if (route.name === 'BeneficiariesScreenWithDrawer') {
                        return <FontAwesomeIcon
                            icon={faUsers}
                            color={focused ? theme?.ThemeData.colors.textColor : color}
                            size={size} />

                    } else if (route.name === 'ATMsScreen') {
                        return <FontAwesomeIcon
                            icon={faLocationDot}
                            color={focused ? theme?.ThemeData.colors.textColor : color}
                            size={size} />

                    } else {
                        return <AirPayIcon color={focused ? theme?.ThemeData.colors.textColor : color} />
                    }
                },
            })}
            initialRouteName='HomeWithDrawerScreen'>
            <Tab.Screen
                name="HomeWithDrawerScreen"
                component={HomeScreenWithDrawer}
                options={{
                    headerShown: false,
                    tabBarLabel: language?.languageData.layoutScreenLabels.homeLabel,
                }} />
            <Tab.Screen
                name="TransferScreen"
                component={TransferScreen}
                options={{
                    tabBarLabel: language?.languageData.layoutScreenLabels.transferLabel
                }}
            />
            <Tab.Screen
                name="BeneficiariesScreenWithDrawer"
                component={BeneficiariesScreenWithDrawer}
                options={{
                    tabBarLabel: language?.languageData.layoutScreenLabels.beneficiariesLabel
                }}
            />
            <Tab.Screen
                name="ATMsScreen"
                component={ATMsScreen}
                options={{
                    tabBarLabel: language?.languageData.layoutScreenLabels.ATMsLabel
                }}
            />
            <Tab.Screen
                name="AirPayWithDrawerScreen"
                component={AirPayScreenWithDrawer}
                options={{
                    tabBarLabel: language?.languageData.layoutScreenLabels.airPay
                }}
            />
        </Tab.Navigator >
    )
}

export default Layout
