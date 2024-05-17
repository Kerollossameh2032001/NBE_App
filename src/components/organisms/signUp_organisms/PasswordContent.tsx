import React, { useContext } from 'react'
import { View } from 'react-native'
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent'
import PasswordForm from '../../molecules/signUp_molecules/PasswordForm'
import PasswordState from '../../molecules/signUp_molecules/PasswordState'
import { LanguageContext } from '../../../App'

type PasswordContentProps = {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;

}
const PasswordContent = ({ password, setPassword, confirmPassword, setConfirmPassword, isValid, setIsValid }: PasswordContentProps) => {
    const language = useContext(LanguageContext);
    return (
        <View>
            <TitlesComponent
                title={language?.languageData.passwordTemplateTitle}
                subTitle={language?.languageData.passwordTemplateSubTitle}
            />
            <PasswordForm
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
            />
            <PasswordState
                isValid={isValid}
                setIsValid={setIsValid}
                password={password}
            />
        </View>
    )
}

export default PasswordContent
