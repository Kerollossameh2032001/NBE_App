import React, { useContext } from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../../App'

type TextButtonProps = {
    text: string | undefined;
    onPress: () => void;
    style?: StyleProp<TextStyle>
}
function TextButton({ text, onPress, style }: TextButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, style]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TextButton
