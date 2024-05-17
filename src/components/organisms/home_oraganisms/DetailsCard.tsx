import React, { useContext } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { ThemeContext } from '../../../App'
import FingerPrint from '../../atoms/login_atoms/FingerPrint'
import DetailsCardHeader from '../../molecules/home_molecules/DetailsCardHeader'
import DetailsCardContent from '../../molecules/home_molecules/DetailsCardContent'
import DetailsCardFooter from '../../molecules/home_molecules/DetailsCardFooter'

const DetailsCard = () => {
    const theme = useContext(ThemeContext);
    return (
        <ImageBackground
            imageStyle={styles.imageStyle}
            style={{ marginTop: '10%', marginBottom: '5%' }}
            source={constantImages.greenCard}>
            <View>
                <DetailsCardHeader />
                <DetailsCardContent />
                <DetailsCardFooter />
            </View>
        </ImageBackground>
    )
}

export default DetailsCard
const styles = StyleSheet.create({
    imageStyle: {
        borderRadius: 29,
        resizeMode: 'cover',
    },
    
});