import React, { useContext } from 'react'
import { View } from 'react-native'
import CustomToggleButton from '../../atoms/global_atoms/CustomToggleButton'
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand'
import { LanguageContext, ThemeContext } from '../../../App'

const LoginHeader = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={theme?.ThemeData.containerStyles.headerStyle}>
            <CustomToggleButton text='AR' onPress={() => { language?.setIsEnglish(!language.currentLang) }} />
            <DisplayAppBrand isPrimary={false} />
        </View>
    )
}

export default LoginHeader;