import React, { useContext } from 'react'
import { StatusBar } from 'react-native'
import { ThemeContext } from '../../../App'

const CustomStatusBar = () => {
  const theme = useContext(ThemeContext)
  return (
    <StatusBar
      barStyle={theme?.currentTheme ? 'light-content' : 'dark-content'}
      translucent={false}
      backgroundColor={theme?.ThemeData.colors.backgroundColor} />
  )
}

export default CustomStatusBar
