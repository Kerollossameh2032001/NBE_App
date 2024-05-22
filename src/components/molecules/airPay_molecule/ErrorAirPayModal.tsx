import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TitlesComponent from '../signUp_molecules/TitlesComponent'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext, ThemeContext } from '../../../App'

type ErrorAirPayModalProps = {
  onPress: () => void
}
const ErrorAirPayModal = ({ onPress }: ErrorAirPayModalProps) => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  return (
    <View style={styles.contentContainer}>
      <Image source={constantImages.errorCardModal} />
      <TitlesComponent
        title={language?.languageData.airPayModal.errorText.title}
        subTitle={language?.languageData.airPayModal.errorText.subTitle}
        titleStyle={{ color: '#EB001B' }}
      />
      <Text style={[theme?.ThemeData.textStyle.titleMeduim, { fontSize: 40 }]}>$5,542.00</Text>

      <View style={styles.btnContainer}>
        <CustomButton
          textStyle={{ color: '#EB001B' }}
          style={styles.cancelBtnStyle}
          text={language?.languageData.airPayModal.errorText.cancelBtn}
          onPress={onPress}
        />
        <CustomButton
          style={{ flex: 1 }}
          text={language?.languageData.airPayModal.errorText.tryAgainBtn}
          onPress={onPress}
        />
      </View>
    </View>
  )
}

export default ErrorAirPayModal
const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnContainer: {
    width: '100%',
    paddingTop: '10%',
    flexDirection: 'row',
  },

  cancelBtnStyle: {
    flex: 0.8,
    borderWidth: 2,
    borderColor: '#EB001B',
    backgroundColor: 'transparent',
    marginRight: '5%'
  }
})