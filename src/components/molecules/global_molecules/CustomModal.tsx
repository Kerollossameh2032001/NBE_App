import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native';
import Modal from "react-native-modal";
import TitlesComponent from '../signUp_molecules/TitlesComponent';
import CustomButton from '../../atoms/global_atoms/CustomButton';
import constantImages from '../../../core/constants/constant_images';
import { ThemeContext } from '../../../App';

type CustomModalProps = {
  title: string | undefined,
  subTitle: string | undefined,
  isModalVisible: boolean,
  finishEvent: () => void
}
const CustomModal = ({ subTitle, title, isModalVisible, finishEvent }: CustomModalProps) => {
  const theme = useContext(ThemeContext);
  return (
    <Modal
      animationIn={'fadeInLeftBig'}
      animationInTiming={2000}
      animationOutTiming={2000}
      animationOut={'fadeOutRight'}
      isVisible={isModalVisible}>
      <View style={[
        styles.modalContainer,
        { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }
      ]}>
        <Image source={constantImages.successModal} />
        <TitlesComponent
          title={title}
          subTitle={subTitle}
        />
        <View style={{ width: '100%', paddingTop: '10%' }}>
          <CustomButton text='Finish' onPress={finishEvent} />
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
const styles = StyleSheet.create({
  modalContainer: {
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
});