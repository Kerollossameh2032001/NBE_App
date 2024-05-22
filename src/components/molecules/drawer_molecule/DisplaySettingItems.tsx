import React, { useContext } from 'react'
import { View } from 'react-native'
import SettingItem from './SettingItem'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCreditCard, faFile, faMoneyCheckDollar, faMoon, faTabletScreenButton, faUsers } from '@fortawesome/free-solid-svg-icons'
import CertificateIcon from '../../atoms/global_atoms/drawer_setting_icon/CertificateIcon'
import OffersIcon from '../../atoms/global_atoms/drawer_setting_icon/OffersIcon'
import CalculatorIcon from '../../atoms/global_atoms/drawer_setting_icon/CalculatorIcon'
import { Switch } from 'react-native-gesture-handler'
import { LanguageContext, ThemeContext } from '../../../App'
import { setData } from '../../../core/services/CacheHelper'
import { DARK_MODE_KEY } from '../../../core/constants/ConstantKeys'

const DisplaySettingItems = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View>
            <SettingItem style={{ paddingTop: '15%' }} title={language?.languageData.drawerSetting.accountSammery} icon={<FontAwesomeIcon icon={faFile} />} />
            <SettingItem style={{ paddingVertical: '5%' }} title={language?.languageData.drawerSetting.certificate} icon={<CertificateIcon />} />
            <SettingItem title={language?.languageData.drawerSetting.payment} icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} />
            <SettingItem style={{ paddingVertical: '5%' }} title={language?.languageData.drawerSetting.cardService} icon={<FontAwesomeIcon icon={faCreditCard} />} />
            <SettingItem title={language?.languageData.drawerSetting.hardToken} icon={<FontAwesomeIcon icon={faTabletScreenButton} />} />
            <SettingItem style={{ paddingVertical: '5%' }} title={language?.languageData.drawerSetting.offers} icon={<OffersIcon />} />
            <SettingItem title={language?.languageData.drawerSetting.customService} icon={<FontAwesomeIcon icon={faUsers} />} />
            <SettingItem style={{ paddingVertical: '5%' }} title={language?.languageData.drawerSetting.calculator} icon={<CalculatorIcon />} />
            <SettingItem
                title={language?.languageData.drawerSetting.mode}
                icon={<FontAwesomeIcon icon={faMoon} />}
                suffixComponent={
                    <Switch
                        trackColor={{ false: '#767577', true: theme?.ThemeData.colors.secondary }}
                        thumbColor={theme?.currentTheme ? theme?.ThemeData.colors.primary : theme?.ThemeData.colors.textColor}
                        ios_backgroundColor="rgb(62, 62, 62)"
                        onValueChange={async () => {
                            theme?.setIsDarkMode(!theme.currentTheme);
                            await setData(DARK_MODE_KEY, !theme?.currentTheme)
                        }}
                        value={theme?.currentTheme}
                    />
                }
            />

        </View>
    )
}

export default DisplaySettingItems
