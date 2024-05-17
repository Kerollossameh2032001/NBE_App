import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import PrivacyPremission from '../../molecules/signUp_molecules/PrivacyPremission'
import { LanguageContext } from '../../../App'

type GoToVerificationProps = {
    goToVerify: () => void;
    number: string;
}
function GoToVerification({ goToVerify, number }: GoToVerificationProps) {
    const language = useContext(LanguageContext);

    function isValidEgyptianPhoneNumber(): boolean {
        const regex = /^(?:\+?20)?(1[0-2]|1[5-9]|2[0-3]|2[5-7])(\d{8})$/;
        return regex.test(number);
      }

    return (
        <View style={styles.bottomContent}>
            <CustomButton
                disabled={number === ''}
                style={styles.buttonStyle}
                text={language?.languageData.nextBtnText}
                onPress={goToVerify}
            />
            <PrivacyPremission />
        </View>
    )
}

export default GoToVerification
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