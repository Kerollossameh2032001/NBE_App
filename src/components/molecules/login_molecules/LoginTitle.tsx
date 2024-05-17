import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App';

const LoginTitle = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View>
            <Text style={theme?.ThemeData.textStyle.titleLarge}>{language?.languageData.loginTitle1}</Text>
            <Text style={theme?.ThemeData.textStyle.titleLarge}>{language?.languageData.loginTitle2}</Text>
            <Text style={theme?.ThemeData.textStyle.titleLarge}>{language?.languageData.loginTitle3}</Text>
        </View>
    )
}

export default LoginTitle
