import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { ThemeContext } from '../../App'
import TransferDataTemplate from '../../components/templates/transfer_template/TransferDataTemplate';
import SignUpHeader from '../../components/organisms/signUp_organisms/SignUpHeader';
import OTPTemplate from '../../components/templates/transfer_template/OTPTemplate';
import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';

const TransferScreen = () => {
    const theme = useContext(ThemeContext);
    const [step, setStep] = useState<number>(0);

    const getCurrentTemp = () => {
        switch (step) {
            case 0:
                return (<TransferDataTemplate goNext={() => {
                    setStep(1)
                }} />)
                break;
            case 1:
                return (<OTPTemplate
                    goNext={() => { setStep(0) }}
                />)

            default:
                (<TransferDataTemplate goNext={() => setStep(1)} />)
                break;
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }}>
            <CustomStatusBar />
            <SignUpHeader
                style={theme?.ThemeData.containerStyles.layoutTemplateContainer} goBack={() => step <= 0 ? setStep(0) : setStep(step - 1)} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {getCurrentTemp()}
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default TransferScreen
