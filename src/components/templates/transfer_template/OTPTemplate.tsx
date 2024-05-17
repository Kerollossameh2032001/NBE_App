import React, { useContext, useState } from 'react'
import { Button, Image, Text, View } from 'react-native'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import { LanguageContext, ThemeContext } from '../../../App'
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent'
import VerificationContent from '../../organisms/signUp_organisms/VerificationContent'

import constantImages from '../../../core/constants/constant_images'
import CustomModal from '../../molecules/global_molecules/CustomModal'

type OTPTemplateProps = {
    goNext: () => void
}
const OTPTemplate = ({ goNext }: OTPTemplateProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    const [digitOne, setDigitOne] = useState<string>('');
    const [digitTwo, setDigitTwo] = useState<string>('');
    const [digitThree, setDigitThree] = useState<string>('');
    const [digitFour, setDigitFour] = useState<string>('');
    const [digitFive, setDigitFive] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>
            <VerificationContent
                title={language?.languageData.otpTitle}
                subTitle={language?.languageData.otbSubTitle}
                phoneNumber='+20 101 131 5412'
                email='kabdelsamea@ejada.com'
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
            <CustomButton
                disabled={
                    digitOne === '' ||
                    digitTwo === '' ||
                    digitThree === '' ||
                    digitFour === '' ||
                    digitFive === ''
                }
                style={{ marginBottom: '6%' }}
                text={language?.languageData.submitBtnText}
                onPress={() => setShowModal(true)}
            />
            <CustomModal
                isModalVisible={showModal}
                finishEvent={() => {
                    setShowModal(false);
                    goNext();
                }}
                title='Mission Complete'
                subTitle={'Transfer to Jsmine Robert' + '\n' + 'was successful'} />
        </View>
    )
}

export default OTPTemplate
