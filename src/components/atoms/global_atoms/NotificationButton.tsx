import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App'

type NotificationButtonProps = {
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}
const NotificationButton = ({ onPress, style }: NotificationButtonProps) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.notificationBtnStyle, { backgroundColor: theme?.ThemeData.colors.textColor }, style]}>
            <FontAwesomeIcon icon={faBell} size={17} color={theme?.ThemeData.colors.iconColor} />
        </TouchableOpacity>
    )
}

export default NotificationButton
const styles = StyleSheet.create({
    notificationBtnStyle: {
        borderRadius: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

})