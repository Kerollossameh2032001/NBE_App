import React, { useContext } from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App';

type RadioButtonProps = {
    disabled?: boolean | undefined
    label: string | undefined;
    isSelect: boolean;
    setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
    style?: StyleProp<ViewStyle>
}
const RadioButton = ({ isSelect, setIsSelect, label, style, disabled }: RadioButtonProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                disabled={disabled}
                style={[
                    styles.circleStyle,
                    { backgroundColor: isSelect ? theme?.ThemeData.colors.primary : theme?.ThemeData.colors.inputTextColor, marginRight: '5%' }
                ]}
                onPress={() => setIsSelect(!isSelect)}
            >
            </TouchableOpacity>
            <Text style={[theme?.ThemeData.textStyle.bodyMeduim, { color: theme?.ThemeData.colors.secondaryTextColor }]}>{label}</Text>
        </View>
    )
}

export default RadioButton
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circleStyle: {
        width: 12,
        height: 12,
        borderRadius: 50
    }
});