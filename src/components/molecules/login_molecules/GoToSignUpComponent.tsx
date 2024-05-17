import React, { useContext } from 'react'

import TextButton from '../../atoms/global_atoms/TextButton'
import { StyleSheet, Text, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App';
import { LoginProps } from '../../../screens/authentication/LoginScreen';

const GoToSignupComponent = ({ navigation }: LoginProps) => {

    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={styles.container}>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, styles.label]}>{language?.languageData.loginHaveAccount}</Text>
            <TextButton
                style={[{ color: theme?.ThemeData.colors.secondary }, styles.textButtonStyle]} text={language?.languageData.signUpHeader}
                onPress={() => navigation.navigate('SignUpScreen')}
            />
        </View>
    )
}

export default GoToSignupComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonStyle: {
        textDecorationLine: 'underline',
        fontFamily: 'Roboto-Bold',
    },
    label: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
    }

});
