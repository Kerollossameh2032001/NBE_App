import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ThemeContext } from '../../../App'

type TitlesComponentProps = {
    title: string | undefined,
    subTitle: string | undefined,
}
function TitlesComponent({ title, subTitle }: TitlesComponentProps) {
    const theme = useContext(ThemeContext);
    return (
        <>
            <Text style={theme?.ThemeData.textStyle.titleMeduim}>{title}</Text>
            <Text style={[
                theme?.ThemeData.textStyle.bodySmall,
                { color: theme?.ThemeData.colors.labelTextColor, fontSize: 16}
            ]}>{subTitle}</Text>
        </>
    )
}

export default TitlesComponent
