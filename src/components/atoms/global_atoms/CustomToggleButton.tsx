import React, { useContext } from 'react'
import { TouchableOpacity, Text, GestureResponderEvent, TouchableHighlight } from 'react-native';
import { ThemeContext } from '../../../App';

type CustomToggleProps = {
    text: string;
    onPress?: () => void;
};

const CustomToggleButton = ({ text, onPress }: CustomToggleProps) => {
    const theme = useContext(ThemeContext);
    //console.log("onPress received:", onPress());
    return (
        <TouchableHighlight
            onPress={onPress}
            style={theme?.ThemeData.buttonStyles.toggleButtonStyle}>
            <Text style={theme?.ThemeData.textStyle.labelMeduim}
            >{text}</Text>
        </TouchableHighlight>
    )
}

export default CustomToggleButton
