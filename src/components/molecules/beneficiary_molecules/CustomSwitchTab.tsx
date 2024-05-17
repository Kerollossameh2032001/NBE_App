import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../../App'
import constantImages from '../../../core/constants/constant_images'

type CustomSwitchTabProps = {
    isGrid: boolean,
    setIsGrid: React.Dispatch<React.SetStateAction<boolean>>
}
const CustomSwitchTab = ({ isGrid, setIsGrid }: CustomSwitchTabProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={[styles.tabBtnContainer, { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }]}>
            <TouchableOpacity
                onPress={() => setIsGrid(true)}
                style={[styles.iconContainer, { backgroundColor: isGrid ? theme?.ThemeData.colors.primary : theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }]}>
                <Image tintColor={isGrid ? 'white' : '#B7B7B7'} source={constantImages.gridTabIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setIsGrid(false)}
                style={[styles.iconContainer, { backgroundColor: !isGrid ? theme?.ThemeData.colors.primary : theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }]}>
                <Image tintColor={!isGrid ? 'white' : '#B7B7B7'} source={constantImages.listTabIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default CustomSwitchTab;

const styles = StyleSheet.create({
    tabBtnContainer: {
        height: 30,
        borderRadius: 15,
        width: 61,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4%'
    },
    iconContainer: {
        height: 24,
        width: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})