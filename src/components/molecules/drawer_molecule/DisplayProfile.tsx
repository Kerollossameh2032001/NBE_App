import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { ThemeContext } from '../../../App'

const DisplayProfile = () => {
    const theme = useContext(ThemeContext);
    return (
        <View style={[styles.drawerProfileConrtainer, { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Image source={constantImages.profileAvatar} />

                <View style={{ paddingLeft: '5%' }}>

                    <Text style={[
                        theme?.ThemeData.textStyle.bodyMeduim,
                        { color: theme?.ThemeData.colors.secondaryTextColor, fontSize: 16 }
                    ]}> Ahmed </Text>

                    <Text style={[
                        theme?.ThemeData.textStyle.bodySmall,
                        { color: theme?.ThemeData.colors.secondaryTextColor, fontSize: 16 }
                    ]}>01285447728</Text>

                </View>
            </View>

            <FontAwesomeIcon icon={faEllipsisV} />

        </View>
    )
}

export default DisplayProfile;

const styles = StyleSheet.create({
    drawerProfileConrtainer: {
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        borderRadius: 29,
        elevation: 4,
    }
})