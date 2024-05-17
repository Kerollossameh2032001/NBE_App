import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App'

type DisplayAccountTitleProps = {
    name: string
}
const DisplayAccountTitle = ({ name }: DisplayAccountTitleProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View style={{ paddingLeft: '5%' }}>

            <Text style={[
                theme?.ThemeData.textStyle.bodySmall,
                { color: theme?.ThemeData.colors.secondaryTextColor, fontSize: 14 }
            ]}>{language?.languageData.appBarWelcomeMsg}</Text>

            <Text style={[
                theme?.ThemeData.textStyle.bodyMeduim,
                { color: theme?.ThemeData.colors.secondaryTextColor }
            ]}>{name}</Text>
        </View>
    )
}

export default DisplayAccountTitle
