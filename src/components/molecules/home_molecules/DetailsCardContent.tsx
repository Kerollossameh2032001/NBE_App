import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { ThemeContext } from '../../../App'

const DetailsCardContent = () => {
    const theme = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, styles.valueStyle]}>****</Text>
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, styles.valueStyle]}>****</Text>
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, styles.valueStyle]}>****</Text>
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, styles.valueStyle]}>6506</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image style={{ marginRight: '1%' }} source={constantImages.VisaMetal} />
                <Image source={constantImages.VisaWifi} />
            </View>
        </View>
    )
}

export default DetailsCardContent
const styles = StyleSheet.create({
    valueStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF',
        fontSize: 25,
    },

    container: {
        flexDirection: 'row',
        padding: '5%',
        justifyContent: 'space-between',
    },



});