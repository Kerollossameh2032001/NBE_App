import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App'

type TabItemProps = {
    title: string | undefined;
    icon: any;
    iconColor: string | undefined;
    iconBackgroundColor: string | undefined;
}
const TabItem = ({ title, icon, iconColor, iconBackgroundColor }: TabItemProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={{ alignItems: 'center', marginVertical: '5%' }}>
            <View style={[style.imageContainer, { backgroundColor: iconBackgroundColor }]}>
                <FontAwesomeIcon icon={icon} size={30} color={iconColor} />
            </View>
            <Text style={[
                theme?.ThemeData.textStyle.bodyMeduim,
                { color: theme?.ThemeData.colors.secondaryTextColor, }
            ]}>{title}</Text>
        </View>
    )
}

export default TabItem;
const style = StyleSheet.create({
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})