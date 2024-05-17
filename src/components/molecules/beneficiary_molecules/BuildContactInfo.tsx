import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App'

type BuildContactInfoProps = {
    title: string,
    icon: any
}
const BuildContactInfo = ({ title, icon }: BuildContactInfoProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={{ flexDirection: 'row' }}>

            <View style={[
                styles.iconBackground,
                { backgroundColor: theme?.ThemeData.colors.settingIconBackgroundColor }
            ]}>
                <FontAwesomeIcon size={12}
                    color={theme?.ThemeData.colors.iconColor}
                    icon={icon} />
            </View>

            <Text style={[
                theme?.ThemeData.textStyle.labelSmall,
                {color: theme?.ThemeData.colors.secondaryTextColor}
            ]}>{title}</Text>
        </View>
    )
}

export default BuildContactInfo
const styles = StyleSheet.create({
    iconBackground: {
        width: 20,
        height: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
    }
})