import React, { useContext } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { ThemeContext } from '../../../App'

type TitlesComponentProps = {
    title: string | undefined,
    subTitle: string | undefined,
    titleStyle?: StyleProp<TextStyle>
}
function TitlesComponent({ title, subTitle, titleStyle }: TitlesComponentProps) {
    const theme = useContext(ThemeContext);
    return (
        <>
            <Text style={[theme?.ThemeData.textStyle.titleMeduim, titleStyle]}>{title}</Text>
            <Text style={[
                theme?.ThemeData.textStyle.bodySmall,
                { color: theme?.ThemeData.colors.labelTextColor, fontSize: 16 }
            ]}>{subTitle}</Text>
        </>
    )
}

export default TitlesComponent
