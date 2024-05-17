import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LogoutIcon from '../../atoms/global_atoms/drawer_setting_icon/LogoutIcon'
import { LanguageContext, ThemeContext } from '../../../App'
import { TouchableOpacity } from 'react-native-gesture-handler'

type LogoutButtonProps = {
    onPress: () => void
}
const LogoutButton = ({ onPress }: LogoutButtonProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    return (
        <TouchableOpacity onPress={onPress} style={styles.settingItemContainer}>
            <View style={[styles.settingIconStyle, { backgroundColor: '#E1072133' }]}>
                <LogoutIcon />
            </View>
            <Text style={[theme?.ThemeData.textStyle.bodyMeduim,
            { color: '#EB001B', paddingHorizontal: '3%' }]}>{language?.languageData.logoutBtn}</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton
const styles = StyleSheet.create({
    settingItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    settingIconStyle: {
        width: 30,
        height: 30,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});