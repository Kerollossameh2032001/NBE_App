import React, { useContext } from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App';

type CustomButtonProps = {
    disabled?: boolean | undefined
    text: string | undefined;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>
    suffix?: any
}
const CustomButton = ({ text, onPress, style, disabled, textStyle, suffix }: CustomButtonProps) => {
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
            <View style={{ position: 'absolute', right: '3%', }}>
                {suffix}
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;
