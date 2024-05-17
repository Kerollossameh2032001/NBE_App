import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import DisplayLogo from '../../components/atoms/global_atoms/DisplayLogo';
import DisplayAppTitleLogo from '../../components/atoms/global_atoms/DisplayAppTitleLogo';
import { ThemeContext } from '../../App';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../core/constants/RootStackParamList';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>

function SplashScreen({ navigation }: SplashProps) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
      <View style={styles.content}>
        <DisplayLogo />
        <DisplayAppTitleLogo />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60%',
    paddingBottom: '15%'
  }
});
export default SplashScreen
