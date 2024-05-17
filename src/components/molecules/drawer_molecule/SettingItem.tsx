import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext, useState } from 'react'
import { StyleProp, StyleSheet, Switch, Text, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App'

type SettingItemProps = {
    title: string | undefined,
    icon: any,
    style?: StyleProp<ViewStyle>
    suffixComponent?: JSX.Element
}
const SettingItem = ({ title, icon, style, suffixComponent }: SettingItemProps) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[{ justifyContent: 'space-between', alignItems: 'center' }, styles.settingItemContainer, style]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.settingIconStyle, { marginHorizontal: '3%', backgroundColor: theme?.ThemeData.colors.settingIconBackgroundColor }]}>
                    {icon}
                </View>
                <Text style={[
                    theme?.ThemeData.textStyle.bodyMeduim,
                    { color: theme?.ThemeData.colors.secondaryTextColor }
                ]}>{title}</Text>
            </View>


            <View>
                {suffixComponent}
            </View>
        </View>
    )
}

export default SettingItem
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
