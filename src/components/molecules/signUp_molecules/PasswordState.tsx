import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import RadioButton from '../../atoms/signUp_atoms/RadioButton'
import { LanguageContext } from '../../../App';

type PasswordStateProps = {
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
    password: string;
}
const PasswordState = ({ isValid, setIsValid, password }: PasswordStateProps) => {

    const [isContainLower, setIsContainLower] = useState<boolean>(/[a-z]/.test(password));
    const [isContainUpper, setIsContainUpper] = useState<boolean>(/[A-Z]/.test(password));
    const [isLargeLenght, setIsLargeLenght] = useState<boolean>(password.length >= 8);
    const [isContainNumber, setIsContainNumber] = useState<boolean>(/\d/.test(password));
    const [isContainSpecial, setIsContainSpecial] = useState<boolean>(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    const language = useContext(LanguageContext);

    useEffect(() => {
        console.log(password);
        setIsContainLower(/[a-z]/.test(password));
        setIsContainUpper(/[A-Z]/.test(password));
        setIsLargeLenght(password.length >= 8);
        setIsContainNumber(/\d/.test(password));
        setIsContainSpecial(/[!@#$%^&*(),.?":{}|<>]/.test(password));
        setIsValid(
            isContainLower &&
            isContainNumber &&
            isContainUpper &&
            isLargeLenght &&
            isContainSpecial);

        console.log(isContainLower);
        console.log(isContainNumber);
        console.log(isContainSpecial);
        console.log(isContainUpper);
        console.log(isLargeLenght);

    }, [password])

    return (
        <View style={{ paddingVertical: '5%' }}>
            <View style={styles.rowContainer}>
                <RadioButton
                    disabled={true}
                    isSelect={isContainLower}
                    setIsSelect={setIsContainLower}
                    label={language?.languageData.isConatainLowerBtn}
                />
                <RadioButton
                    disabled={true}
                    isSelect={isContainUpper}
                    setIsSelect={setIsContainUpper}
                    label={language?.languageData.isConatainUpperBtn}
                />
            </View>
            <View style={styles.rowContainer}>
                <RadioButton
                    disabled={true}
                    isSelect={isLargeLenght}
                    setIsSelect={setIsLargeLenght}
                    label={language?.languageData.isLargeLength}
                />
                <RadioButton
                    disabled={true}
                    style={{ flex: language?.currentLang ? 0.85 : 0 }}
                    isSelect={isContainNumber}
                    setIsSelect={setIsContainNumber}
                    label={language?.languageData.isConatainNumberBtn}
                />
            </View>
            <View style={styles.rowContainer}>
                <RadioButton
                    disabled={true}
                    isSelect={isContainSpecial}
                    setIsSelect={setIsContainSpecial}
                    label={language?.languageData.isConatainSpecialBtn}
                />
            </View>

        </View>
    )
}

export default PasswordState
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})