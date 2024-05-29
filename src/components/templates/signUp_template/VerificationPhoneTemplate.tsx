import React, { useContext, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App'
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent';
import CustomButton from '../../atoms/global_atoms/CustomButton';
import VerifyItem from '../../molecules/global_molecules/VerifyItem';
import VerificationContent from '../../organisms/signUp_organisms/VerificationContent';

type VerificationPhoneTemplateProps = {
    phoneNumber: string,
    goNext: () => void,
    confirmCode: (code: string) => Promise<void>
    error: string
}
function VerificationPhoneTemplate({ phoneNumber, goNext, confirmCode, error }: VerificationPhoneTemplateProps) {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    const [digitOne, setDigitOne] = useState<string>('');
    const [digitTwo, setDigitTwo] = useState<string>('');
    const [digitThree, setDigitThree] = useState<string>('');
    const [digitFour, setDigitFour] = useState<string>('');
    const [digitFive, setDigitFive] = useState<string>('');
    // const [index, setIndex] = useState<number>(1);
    // const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

    return (
        <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>
            <VerificationContent
                title={language?.languageData.verificationTitle}
                subTitle={language?.languageData.verificationTitle}
                phoneNumber={phoneNumber}
                digitOne={digitOne}
                digitTwo={digitTwo}
                digitThree={digitThree}
                digitFour={digitFour}
                digitFive={digitFive}
                setDigitOne={setDigitOne}
                setDigitTwo={setDigitTwo}
                setDigitThree={setDigitThree}
                setDigitFour={setDigitFour}
                setDigitFive={setDigitFive}
            />
            {error ? <Text style={{color:'red'}}>{error}</Text> : null}
            <CustomButton
                disabled={(digitOne === '' || digitTwo === '' || digitThree === '' || digitFour === '' || digitFive === '')}
                style={[styles.buttonStyle, styles.bottomContent]}
                text={language?.languageData.nextBtnText}
                onPress={() => {
                    //Verify Digit Function
                    confirmCode(digitOne + digitTwo + digitThree + digitFour + digitFive)
                    //if True
                    //error ? null : goNext();
                    goNext();
                }}
            />

        </View>
    )
}

export default VerificationPhoneTemplate;
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