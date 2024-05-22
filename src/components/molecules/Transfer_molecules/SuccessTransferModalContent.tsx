import React from 'react'
import { Image, View } from 'react-native';
import TitlesComponent from '../signUp_molecules/TitlesComponent';
import CustomButton from '../../atoms/global_atoms/CustomButton';
import constantImages from '../../../core/constants/constant_images';

type SuccessTransferModalContentProps = {
    onPress: () => void
}
const SuccessTransferModalContent = ({ onPress }: SuccessTransferModalContentProps) => {
    return (
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={constantImages.successModal} />
            <TitlesComponent
                title='Mission Complete'
                subTitle={'Transfer to Jsmine Robert' + '\n' + 'was successful'}
            />
            <View style={{ width: '100%', paddingTop: '10%' }}>
                <CustomButton text='Finish' onPress={onPress} />
            </View>
        </View>
    )
}

export default SuccessTransferModalContent
