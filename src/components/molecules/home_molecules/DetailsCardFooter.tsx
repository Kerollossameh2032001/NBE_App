import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailsCardFooter = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleStyle}>CARD HOLDER</Text>
                <Text style={[styles.titleStyle, styles.subColorStyle]}>AHMAD SAMI AL-SAYED</Text>
            </View>
            <View>
                <Text style={styles.titleStyle}>EXPIRES</Text>
                <Text style={[styles.titleStyle, styles.subColorStyle]}>08/25</Text>
            </View>
            <View>
                <Text style={styles.titleStyle}>CVV</Text>
                <Text style={[styles.titleStyle, styles.subColorStyle]}>352</Text>
            </View>
        </View>
    )
}

export default DetailsCardFooter
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: '5%',
        justifyContent: 'space-between',
    },

    titleStyle: {
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        fontSize: 14,
        color: '#848484'
    },
    subColorStyle: {
        color: '#FFFFFF'
    }
});