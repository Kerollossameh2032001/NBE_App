import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { RootDrawerParamList } from '../../core/constants/RootStackParamList';
import { ThemeContext } from '../../App';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';
import BeneficiaryTemplat from '../../components/templates/beneficiary_template/BeneficiaryTemplat';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';

export type HomeProps = NativeStackScreenProps<RootDrawerParamList, 'BeneficiariesScreen'>

const Drawer = createDrawerNavigator();

export const BeneficiariesScreenWithDrawer = () => {
  const theme = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      initialRouteName='BeneficiariesScreen'
      drawerContent={DrawerContent}
      screenOptions={{
        drawerStyle: {
          padding: '3%',
          borderTopEndRadius: 40,
          borderBottomEndRadius: 40,
          backgroundColor: theme?.ThemeData.colors.backgroundColor
        }
      }}>
      <Drawer.Screen name='BeneficiariesScreen' component={BeneficiariesScreen}
        options={{
          headerShown: false
        }} />
    </Drawer.Navigator>
  );
}


const BeneficiariesScreen = () => {
  const navigation = useNavigation<any>();
  const theme = useContext(ThemeContext);
  return (
    <View style={[theme?.ThemeData.containerStyles.layoutTemplateContainer, { flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
      <CustomStatusBar />
      <BeneficiaryTemplat openDrawer={() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
      }} />
    </View>
  )
}

export default BeneficiariesScreen
