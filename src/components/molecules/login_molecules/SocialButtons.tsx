import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from '../../atoms/global_atoms/TextButton'
import { LanguageContext, ThemeContext } from '../../../App'

const SocialButtons = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <View style={styles.container}>
            <TextButton style={{ color: theme?.ThemeData.colors.secondary }} text={language?.languageData.socialBtnText.contactUs} onPress={() => { }} />
            <Text style={[theme?.ThemeData.textStyle.labelSmall, styles.label]}>-</Text>
            <TextButton style={{ color: theme?.ThemeData.colors.secondary }} text={language?.languageData.socialBtnText.FAQs} onPress={() => { }} />
            <Text style={[theme?.ThemeData.textStyle.labelSmall, styles.label]}>-</Text>
            <TextButton style={{ color: theme?.ThemeData.colors.secondary }} text={language?.languageData.socialBtnText.help} onPress={() => { }} />
        </View>
    )
}

export default SocialButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
    },
    label: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
    }
});