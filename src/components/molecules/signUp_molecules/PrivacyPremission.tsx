import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TextButton from '../../atoms/global_atoms/TextButton'
import { LanguageContext, ThemeContext } from '../../../App'

const PrivacyPremission = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <Text style={[
            theme?.ThemeData.textStyle.bodySmall,
            { color: theme?.ThemeData.colors.labelTextColor, fontSize: 14 }
        ]}>{language?.languageData.perivacyPremessionText.text1}

            <Text onPress={() => { }} style={[
                theme?.ThemeData.textStyle.labelMeduim,
                { color: theme?.ThemeData.colors.inputTextColor }
            ]}>{language?.languageData.perivacyPremessionText.serviceBtnText} </Text>


            {language?.languageData.perivacyPremessionText.text2}

            <Text onPress={() => { }} style={[
                theme?.ThemeData.textStyle.labelMeduim,
                { color: theme?.ThemeData.colors.inputTextColor }
            ]}>{language?.languageData.perivacyPremessionText.perivacyBtnText}</Text>

        </Text>
    )
}


export default PrivacyPremission
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        margin: '5%'
    }
})