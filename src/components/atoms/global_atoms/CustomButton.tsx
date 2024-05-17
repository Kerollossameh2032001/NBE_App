import React, { useContext } from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App';

type CustomButtonProps = {
    disabled?: boolean | undefined
    text: string | undefined;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>
}
const CustomButton = ({ text, onPress, style, disabled, textStyle }: CustomButtonProps) => {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={[
                theme?.ThemeData.buttonStyles.elevatedButton,
                style,
                { opacity: disabled ? 0.5 : 1 }
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[
                theme?.ThemeData.textStyle.labelMeduim,
                { color: theme?.ThemeData.colors.textColor },
                textStyle,
            ]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
