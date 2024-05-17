import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App'
import CustomButton from '../../atoms/global_atoms/CustomButton';
import PasswordContent from '../../organisms/signUp_organisms/PasswordContent';

type EnterPasswordTemplateProps = {
    goNext: () => void;
}
const EnterPasswordTemplate = ({ goNext }: EnterPasswordTemplateProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isValid, setIsValid] = useState(false);

    return (
        <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>
            <PasswordContent
                isValid={isValid}
                setIsValid={setIsValid}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
            />

            <CustomButton
                disabled={
                    password === '' ||
                    confirmPassword === '' ||
                    password != confirmPassword ||
                    !isValid}
                style={[styles.buttonStyle, styles.bottomContent]}
                text={language?.languageData.submitBtnText}
                onPress={goNext}
            />
        </View>
    )
}

export default EnterPasswordTemplate
const styles = StyleSheet.create({
    bottomContent: {
        alignItems: 'center',
        marginBottom: '5%',
    },
    buttonStyle: {
        marginBottom: '5%',
        width: '100%'
    }
})