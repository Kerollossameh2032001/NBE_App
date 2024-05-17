import React, { useContext } from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App'

type ConnectionItemProps = {
    image: ImageSourcePropType | undefined,
    name: string,
}
const ConnectionItem = ({ name, image }: ConnectionItemProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={[styles.itemContainer, { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor}]}>
            <Image style={{ bottom: 3.5, resizeMode: 'cover' }} source={image} />
            <Text style={[
                theme?.ThemeData.textStyle.labelSmall,
                { fontFamily: 'Roboto-Bold', color: theme?.ThemeData.colors.secondaryTextColor, }
            ]}>{name}</Text>
        </View>
    )
}

export default ConnectionItem
const styles = StyleSheet.create({
    itemContainer: {
        marginRight: '1%',
        marginBottom: '3%',
        elevation: 2,
        height: 85,
        width: 77,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

})