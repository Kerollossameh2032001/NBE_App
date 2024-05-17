import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import TextButton from '../../atoms/global_atoms/TextButton'
import { LanguageContext, ThemeContext } from '../../../App'

type SectionHeaderProps = {
    title: string | undefined
    viewAllAction: () => void
}
const SectionHeader = ({ title, viewAllAction }: SectionHeaderProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={theme?.ThemeData.textStyle.titleMeduim}>{title}</Text>
            <TextButton
                style={{ color: theme?.ThemeData.colors.inputTextColor }}
                text={language?.languageData.viewAllBtn}
                onPress={viewAllAction}
            />
        </View>
    )
}

export default SectionHeader
