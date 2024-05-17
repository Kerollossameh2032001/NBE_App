import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import FingerPrint from '../../atoms/login_atoms/FingerPrint'
import { ThemeContext } from '../../../App'
import constantImages from '../../../core/constants/constant_images'

const BalanceCard = () => {
    const theme = useContext(ThemeContext);
    return (
        <ImageBackground
            imageStyle={{ borderRadius: 29, resizeMode: 'cover' }}
            style={{ marginTop: '10%' }}
            source={constantImages.greenCard}>
            <View style={{ padding: 0, margin: 0 }}>
                <View style={styles.headerStyle}>
                    <Text style={[theme?.ThemeData.textStyle.bodyMeduim, { color: '#FFF' }]}>Balance</Text>
                    <FingerPrint />
                </View>
                <View style={{ paddingBottom: '8%', justifyContent: 'center' }}>
                    <Text style={[theme?.ThemeData.textStyle.titleMeduim, styles.valueStyle]}>$2,374,654.25</Text>
                </View>
            </View>

        </ImageBackground>
    )
}

export default BalanceCard
const styles = StyleSheet.create({
    valueStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF'
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'
    }
});