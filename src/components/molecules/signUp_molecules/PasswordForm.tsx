import React, { useContext } from 'react'
import TextField from '../global_molecules/TextField'
import LockIcon from '../../atoms/global_atoms/LockIcon'
import { LanguageContext } from '../../../App';

type PasswordFormProps = {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordForm = ({ password, setPassword, confirmPassword, setConfirmPassword }: PasswordFormProps) => {
    const language = useContext(LanguageContext);
    return (
        <>
            <TextField
                label={language?.languageData.loginPasswordField}
                placeholder='••••••••••••••••••••••••'
                setValue={setPassword}
                value={password}
                enableFocus={true}
                isPassword={true}
                prefixComponent={<LockIcon />}

            />
            <TextField
                label={language?.languageData.confirmPassword}
                placeholder={language?.languageData.confirmPasswordPlacholder}
                setValue={setConfirmPassword}
                value={confirmPassword}
                enableFocus={true}
                isPassword={true}
                prefixComponent={<LockIcon />}
            />
        </>
    )
}

export default PasswordForm
