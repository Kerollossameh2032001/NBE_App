import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import { ThemeContext } from '../../../App';
import BuildContactInfo from './BuildContactInfo';
import { faDollar, faPhone } from '@fortawesome/free-solid-svg-icons';
import { binifeciaryAccountDataType } from '../../../core/dummy_data/BeneficiaryData';

type BuildListItemProps = {
    onPress?: () => void;
    disabled?: boolean | undefined
    model: binifeciaryAccountDataType,
}
const BuildListItem = ({ onPress, model, disabled }: BuildListItemProps) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.itemContainer,
                { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }
            ]}>
            <Image resizeMode='cover'
                style={{ width: 59, height: 59 }}
                source={model.image}
            />

            <View style={{ paddingLeft: '3%' }}>
                <Text style={[
                    theme?.ThemeData.textStyle.titleMeduim,
                    { fontSize: 18 }
                ]}>
                    {model.name + ' ' + model.lastName}
                </Text>
                <BuildContactInfo
                    icon={faPhone}
                    title={model.number}
                />
                <BuildContactInfo
                    icon={faDollar}
                    title={model.accountBalance}
                />
            </View>
        </TouchableOpacity>
    )
}

export default BuildListItem
const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 86,
        borderRadius: 18,
        shadowColor: '#0000001A',
        shadowOffset: {
            width: 0, // Horizontal offset
            height: 1, // Vertical offset
        },
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 2, // Blur radius
        elevation: 5, // Elevation for Android shadow
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%',
        marginVertical: '2%'
    },

})