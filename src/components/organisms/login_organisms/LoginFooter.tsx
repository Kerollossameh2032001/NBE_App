import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SocialButtons from '../../molecules/login_molecules/SocialButtons'
import { LanguageContext, ThemeContext } from '../../../App';

const LoginFooter = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={styles.footerContainer}>
            <SocialButtons />
            <Text style={theme?.ThemeData.textStyle.bodySmall}>{language?.languageData.copyRightText}</Text>
        </View>
    )
}

export default LoginFooter
const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#0000008d',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '3%'
    }
})