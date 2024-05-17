import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../../App'
import Icon from 'react-native-vector-icons/FontAwesome';

type BackButtonProps = {
    onPress: () => void | undefined
}
const BackButton = ({ onPress }: BackButtonProps) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity onPress={onPress} style={[
            theme?.ThemeData.buttonStyles.toggleButtonStyle,
            { padding: 15, backgroundColor: theme?.ThemeData.colors.primary }
        ]}>
            <Icon name='chevron-left' size={17} color='#FFFFFF' />
        </TouchableOpacity>
    )
}

export default BackButton;
