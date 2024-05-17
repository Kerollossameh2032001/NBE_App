import React, { useContext } from 'react'
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext, ThemeContext } from '../../../App'

type AddButtonProps = {
    addEvent: () => void,
    style?: StyleProp<ViewStyle>
    textColor?: string
}
const AddButton = ({ addEvent, style, textColor }: AddButtonProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <TouchableOpacity
            onPress={addEvent}
            style={[
                styles.addBtnContainer,
                { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor },
                style,
            ]}>
            <Image tintColor={textColor} source={constantImages.addIcon} />
            <Text style={{ color: textColor ?? theme?.ThemeData.colors.primary }}>{language?.languageData.addBtnTxt}</Text>
        </TouchableOpacity>
    )
}

export default AddButton
const styles = StyleSheet.create({
    addBtnContainer: {
        marginLeft: 7,
        height: 30,
        borderRadius: 15,
        width: 61,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '4%'
    },
})