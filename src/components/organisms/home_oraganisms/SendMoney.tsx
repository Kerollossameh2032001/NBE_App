import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import SectionHeader from '../../molecules/home_molecules/SectionHeader'
import ConnectionItem from '../../molecules/home_molecules/ConnectionItem'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext } from '../../../App'
import { connectionData } from '../../../core/dummy_data/ContactData'

const SendMoney = () => {
   
    const language = useContext(LanguageContext);
    return (
        <View>
            <SectionHeader title={language?.languageData.sendMoneyTitle} viewAllAction={() => { }} />

            <FlatList
                style={{ paddingVertical: '3%' }}
                data={connectionData}
                renderItem={({ item }) => <ConnectionItem
                    image={item.image}
                    name={item.name}
                />
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default SendMoney
