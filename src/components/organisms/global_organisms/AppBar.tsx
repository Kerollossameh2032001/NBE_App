import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import DisplayAccountTitle from '../../molecules/global_molecules/DisplayAccountTitle'
import NotificationButton from '../../atoms/global_atoms/NotificationButton'
import { ThemeContext } from '../../../App'

type AppBarProps = {
    openDrawer: () => void
}
const AppBar = ({ openDrawer }: AppBarProps) => {
    const theme = useContext(ThemeContext)
    return (
        <View style={styles.appBarContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ padding: '5%' }} onPress={openDrawer}>
                    <FontAwesomeIcon icon={faBars} color={theme?.ThemeData.colors.secondaryTextColor} size={25} />
                </TouchableOpacity>

                <Image source={constantImages.profileAvatar} />
                <DisplayAccountTitle name='Ahmed' />
            </View>

            <NotificationButton onPress={() => { }} />
        </View>
    )
}

export default AppBar;
const styles = StyleSheet.create({
    appBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})