import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { LanguageContext } from '../../../App';
import LoginTitle from '../../molecules/login_molecules/LoginTitle';
import TextField from '../../molecules/global_molecules/TextField';
import LockIcon from '../../atoms/global_atoms/LockIcon';
import RememberForgetPasswordComponent from '../../molecules/login_molecules/RememberForgetPasswordComponent';
import SubmitComponent from '../../molecules/login_molecules/SubmitComponent';
import GoToSignupComponent from '../../molecules/login_molecules/GoToSignUpComponent';
import { LoginProps } from '../../../screens/authentication/LoginScreen';

const LoginForm = ({ navigation, route }: LoginProps) => {
    const language = useContext(LanguageContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    return (
        <View style={styles.formContainer}>
            <LoginTitle />
            <TextField
                label={language?.languageData.loginUserNameField}
                isPrimary={false}
                maxLength={8}
                placeholder="Ex. 6532542"
                setValue={setUserName}
                value={userName}
                prefixComponent={(<Text style={{ color: "#FFF", fontSize: 25 }}>@</Text>)}
                keyboardType='numeric'
                enableFocus={false}
            />
            <TextField
                isPassword={true}
                label={language?.languageData.loginPasswordField}
                isPrimary={true}
                placeholder="Enter Password"
                setValue={setPassword}
                value={password}
                prefixComponent={(<LockIcon />)}
                enableFocus={true}
                style={{backgroundColor: '#FFFFFF'}}
                textInputStyle={{color: '#1C2437'}}
            />

            <RememberForgetPasswordComponent
                rememberMe={rememberMe}
                setRememberMe={setRememberMe}
            />

            <SubmitComponent onSubmit={() => { navigation.replace('Layout') }} isValid={userName != '' && password != ''} />
            <GoToSignupComponent navigation={navigation} route={route} />
        </View>
    )
}

export default LoginForm;
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: '5%',
    },
})