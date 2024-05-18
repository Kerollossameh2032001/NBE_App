import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { RootDrawerParamList } from '../../core/constants/RootStackParamList';
import { ThemeContext } from '../../App';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';
import BeneficiaryTemplat from '../../components/templates/beneficiary_template/BeneficiaryTemplat';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';
import AppBar from '../../components/organisms/global_organisms/AppBar';
import AddBeneficiaryTemplate from '../../components/templates/beneficiary_template/AddBeneficiaryTemplate';
import BeneficiaryDetails from '../../components/templates/beneficiary_template/BeneficiaryDetails';

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


enum beneficiaryTemplates {
  BeneficiaryTemplate = 1,
  AddBeneficiaryTemplate = 2,
  DetailsBeneficiaryTemplate = 3,
}

const BeneficiariesScreen = () => {

  const navigation = useNavigation<any>();
  const theme = useContext(ThemeContext);
  const [currentTemp, setCurrentTemp] = useState<beneficiaryTemplates>(beneficiaryTemplates.BeneficiaryTemplate);
  const [clickedItemId, setclickedItemId] = useState<number | undefined>();

  function getCurrentTemp(): JSX.Element {
    if (currentTemp === 1) {
      return <BeneficiaryTemplat
        goToAdd={() => setCurrentTemp(beneficiaryTemplates.AddBeneficiaryTemplate)}
        goToDetails={(itemId: number) => {
          setclickedItemId(itemId)
          return setCurrentTemp(beneficiaryTemplates.DetailsBeneficiaryTemplate);
        }}
      />
    }

    return currentTemp === 2 ?
      <AddBeneficiaryTemplate
        goBack={() => setCurrentTemp(beneficiaryTemplates.BeneficiaryTemplate)}

      /> :
      <BeneficiaryDetails
        goBack={() => setCurrentTemp(beneficiaryTemplates.BeneficiaryTemplate)}
        itemId={clickedItemId}
      />
  }
  return (
    <View style={[theme?.ThemeData.containerStyles.layoutTemplateContainer, { flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
      <CustomStatusBar />
      {currentTemp === 2 ? <></> : <AppBar openDrawer={() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
      }} />}
      {getCurrentTemp()}
    </View>
  )
}

export default BeneficiariesScreen
