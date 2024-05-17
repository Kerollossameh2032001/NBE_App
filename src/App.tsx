import React, { createContext, useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

//constant-components
import lightTheme from './core/theme/light_theme';
import darkTheme from './core/theme/dark_theme';
import englishText from './core/localization/english_constant_text';
import arabicText from './core/localization/arabic_constant_text';
import { RootStackParamList } from './core/constants/RootStackParamList';

//Navigations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import SplashScreen from './screens/authentication/SplashScreen';
import LoginScreen from './screens/authentication/LoginScreen';
import SignUpScreen from './screens/authentication/SignUpScreen';

import Layout from './screens/layouts/Layout';
import HomeScreen from './screens/layouts/HomeScreen';


type Theme = {
  currentTheme: boolean;
  ThemeData: typeof lightTheme;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

type Language = {
  currentLang: boolean;
  languageData: typeof englishText;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
};


const Stack = createNativeStackNavigator<RootStackParamList>()



export const ThemeContext = createContext<Theme | undefined>(undefined);
export const LanguageContext = createContext<Language | undefined>(undefined);

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <ThemeContext.Provider value={{ currentTheme: isDarkMode, ThemeData: isDarkMode ? darkTheme : lightTheme, setIsDarkMode }}>
      <LanguageContext.Provider value={{ currentLang: isEnglish, languageData: isEnglish ? englishText : arabicText, setIsEnglish }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen
              name='SplashScreen'
              component={SplashScreen}
              options={{
                headerTransparent: true,
                title: '',
              }} />
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{
                headerTransparent: true,
                title: '',
              }} />
            <Stack.Screen
              name='SignUpScreen'
              component={SignUpScreen}
              options={{
                headerTransparent: true,
                title: '',
                headerLeft: () => (<View></View>),
              }} />
            <Stack.Screen
              name='Layout'
              component={Layout}
              options={{
                headerTransparent: true,
                title: '',
                headerLeft: () => (<View></View>),
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageContext.Provider>
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({});

export default App;
