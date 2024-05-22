import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TitlesComponent from '../signUp_molecules/TitlesComponent'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext, ThemeContext } from '../../../App'

type SuccessAirPayModelProps = {
    onPress: () => void,
}
const SuccessAirPayModel = ({ onPress }: SuccessAirPayModelProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={styles.contentContainer}>
            <Image source={constantImages.successCardModal} />
            <TitlesComponent
                title={language?.languageData.airPayModal.successText.title}
                subTitle={language?.languageData.airPayModal.successText.subTitle}
            />
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, { fontSize: 40 }]}>$5,542.00</Text>
            <View style={styles.btnContainer}>
                <CustomButton text={language?.languageData.airPayModal.successText.btnText} onPress={onPress} />
            </View>
        </View>
    )
}

export default SuccessAirPayModel
const styles = StyleSheet.create({
    contentContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        width: '100%',
        paddingTop: '10%',
    }
})