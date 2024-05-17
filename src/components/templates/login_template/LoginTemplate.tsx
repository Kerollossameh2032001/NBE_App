import React from 'react'
import LoginHeader from '../../organisms/login_organisms/LoginHeader'
import LoginForm from '../../organisms/login_organisms/LoginForm'
import LoginFooter from '../../organisms/login_organisms/LoginFooter'
import { LoginProps } from '../../../screens/authentication/LoginScreen'

function LoginTemplate({ navigation,route }: LoginProps) {
    return (
        <>
            <LoginHeader />
            <LoginForm route={route} navigation={navigation}/>
            <LoginFooter />
        </>
    )
}

export default LoginTemplate
