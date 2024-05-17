import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import TabItem from '../../molecules/home_molecules/TabItem'
import { faFaucetDrip, faFile, faKeyboard, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext, ThemeContext } from '../../../App'

const DisplayTabs = () => {
    const language = useContext(LanguageContext);
    return (

        <View style={styles.container}>
            <TabItem
                title={language?.languageData.homeTabsTitles.account}
                icon={faMoneyBillWave}
                iconBackgroundColor='#00C97426'
                iconColor='#00C974' />
            <TabItem
                title={language?.languageData.homeTabsTitles.card}
                icon={faKeyboard}
                iconBackgroundColor='#00ADF826'
                iconColor='#00ADF8' />
            <TabItem
                title={language?.languageData.homeTabsTitles.utilities}
                icon={faFaucetDrip}
                iconBackgroundColor='#F6A72126'
                iconColor='#F6A721' />

            <TabItem
                title={language?.languageData.homeTabsTitles.history}
                icon={faFile}
                iconBackgroundColor='#FF002E26'
                iconColor='#FF002E' />
        </View>
    )
}

export default DisplayTabs
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})