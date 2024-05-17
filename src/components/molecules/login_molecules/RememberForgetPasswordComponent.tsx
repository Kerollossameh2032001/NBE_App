import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CheckBox from '../../atoms/login_atoms/CheckBox'
import TextButton from '../../atoms/global_atoms/TextButton'
import { LanguageContext } from '../../../App'
import { LoginProps } from '../../../screens/authentication/LoginScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../core/constants/RootStackParamList'

type RememberForgetPasswordProps = {
    rememberMe: boolean;
    setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}
const RememberForgetPasswordComponent = ({ rememberMe, setRememberMe}: RememberForgetPasswordProps) => {
    const language = useContext(LanguageContext);

    return (
        <View style={styles.container}>
            <CheckBox
                label={language?.languageData.loginRememberMe}
                isSelect={rememberMe}
                setIsSelect={setRememberMe}
            />
            <TextButton
                text={language?.languageData.loginForgotPasswordBtn}
                onPress={() => {
                }}
            />
        </View>
    )
}

export default RememberForgetPasswordComponent;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '5%',
    }
})
