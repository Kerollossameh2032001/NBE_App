import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../../App';

type BuildGridItem = {
    model: {
        key: string;
        name: string;
        lastName: string;
        image: any;
        number: string;
        accountBalance: string;
    },
    onPress: () => void
}
const BuildGridItem = ({ model, onPress }: BuildGridItem) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.itemContainer,
                { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }
            ]}>
            <Image source={model.image} />
            <Text style={[
                theme?.ThemeData.textStyle.labelSmall,
                { color: theme?.ThemeData.colors.secondaryTextColor, fontFamily: 'Roboto-Bold' }
            ]}>{model.name}</Text>
        </TouchableOpacity>
    )
}

export default BuildGridItem
const styles = StyleSheet.create({

    itemContainer: {
        width: 77,
        height: 86,
        borderRadius: 18,
        justifyContent: 'space-around',
        paddingVertical: '3%',
        alignItems: 'center'
    },

})