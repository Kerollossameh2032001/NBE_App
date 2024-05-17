import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand';
import CustomToggleButton from '../../atoms/global_atoms/CustomToggleButton';
import { LanguageContext, ThemeContext } from '../../../App';
import DisplaySettingItems from '../../molecules/drawer_molecule/DisplaySettingItems';
import LogoutIcon from '../../atoms/global_atoms/drawer_setting_icon/LogoutIcon';
import LogoutButton from '../../molecules/drawer_molecule/LogoutButton';
import constantImages from '../../../core/constants/constant_images';
import DisplayAccountTitle from '../../molecules/global_molecules/DisplayAccountTitle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import DisplayProfile from '../../molecules/drawer_molecule/DisplayProfile';

const DrawerContent = (props: DrawerContentComponentProps) => {
    const language = useContext(LanguageContext);
    const theme = useContext(ThemeContext);
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <DrawerContentScrollView  {...props} >

                <View style={styles.drawerHeader}>
                    <DisplayAppBrand />
                    {<CustomToggleButton text='AR' onPress={() => { language?.setIsEnglish(!language.currentLang) }} />}
                </View>
                
                <DisplaySettingItems />
            </DrawerContentScrollView>
            <View>
                <LogoutButton onPress={() => { }} />
                <DisplayProfile />
            </View>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    drawerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    drawerProfileConrtainer: {
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        borderRadius: 29,
        elevation: 15,
    }
});
