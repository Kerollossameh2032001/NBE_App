import React from 'react'
import { StyleSheet, View } from 'react-native'
import DisplayAppTitleLogo from '../../atoms/global_atoms/DisplayAppTitleLogo'
import DisplayMinLogo from '../../atoms/global_atoms/DisplayMinLogo'

type DisplayAppBrandProps = {
    isPrimary?: boolean | undefined;
}
const DisplayAppBrand = ({ isPrimary = true }: DisplayAppBrandProps) => {
    return (
        <View style={styles.logoStyle}>
            <DisplayAppTitleLogo style={{ marginRight: '3%' }} color={isPrimary ? '#007236' : '#ffffff'} />
            <DisplayMinLogo color={isPrimary ? '#007236' : '#ffffff'} />
        </View>
    )
}

export default DisplayAppBrand

const styles = StyleSheet.create({
    logoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})