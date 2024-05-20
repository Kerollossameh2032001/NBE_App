import React, { useContext } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { ThemeContext } from '../../../App'
import FingerPrint from '../../atoms/login_atoms/FingerPrint'
import DetailsCardHeader from '../../molecules/home_molecules/DetailsCardHeader'
import DetailsCardContent from '../../molecules/home_molecules/DetailsCardContent'
import DetailsCardFooter from '../../molecules/home_molecules/DetailsCardFooter'

type DetailsCardProps = {
    image: any
}

const DetailsCard = ({ image }: DetailsCardProps) => {
    const theme = useContext(ThemeContext);
    return (
        <ImageBackground
            imageStyle={styles.imageStyle}
            style={styles.imageBackground}
            source={image}
        >
            <View style={styles.contentContainer}>
                <DetailsCardHeader />
                <DetailsCardContent />
                <DetailsCardFooter />
            </View>
        </ImageBackground>
    );


}

export default DetailsCard
const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get('window').width * 0.9, // Full width of the screen
        height: '90%', // Full height of the container
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 29,
        resizeMode: 'cover'
    },
    contentContainer: {
        width: '100%',
        height: '100%',
    },
});