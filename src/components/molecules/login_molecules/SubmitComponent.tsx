import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import FingerPrint from '../../atoms/login_atoms/FingerPrint'
import { LanguageContext } from '../../../App'

type SubmitComponentProps = {
    isValid: boolean;
    onSubmit: () => void;
}
function SubmitComponent({ isValid, onSubmit }: SubmitComponentProps) {
    const language = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <CustomButton
                    disabled={!isValid}
                    text={language?.languageData.loginSubmitBtn}
                    onPress={onSubmit}
                />
            </View>
            <View style={{ paddingLeft: '5%' }}>
                <FingerPrint />
            </View>
        </View>
    )
}

export default SubmitComponent
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})