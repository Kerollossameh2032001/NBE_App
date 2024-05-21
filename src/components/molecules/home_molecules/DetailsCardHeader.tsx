import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { ThemeContext } from '../../../App'

type DetailsCardHeaderProps = {
    balance: string
}
const DetailsCardHeader = ({ balance }: DetailsCardHeaderProps) => {
    const theme = useContext(ThemeContext)
    return (
        <View style={styles.headerStyle}>
            <Text style={[
                theme?.ThemeData.textStyle.titleMeduim,
                { color: '#FFF', fontSize: 30, }
            ]}>
                {balance}
            </Text>
            <Image source={constantImages.VisaIcon} />
        </View>
    )
}

export default DetailsCardHeader
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'
    },
});