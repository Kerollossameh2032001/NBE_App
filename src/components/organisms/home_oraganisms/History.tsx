import React, { useContext } from 'react'
import { View } from 'react-native'
import SectionHeader from '../../molecules/home_molecules/SectionHeader'
import { FlatList } from 'react-native-gesture-handler'
import HistoryItem from '../../molecules/home_molecules/HistoryItem'
import { LanguageContext } from '../../../App'
import { historyDummyData } from '../../../core/dummy_data/HistoryDummyData'

const History = () => {
   
    const language = useContext(LanguageContext)
    return (
        <View style={{ flex: 1 }}>
            <SectionHeader title={language?.languageData.homeTabsTitles.history} viewAllAction={() => { }} />
            <FlatList
                style={{ paddingVertical: '5%', flex: 1 }}
                data={historyDummyData}
                renderItem={({ item }) =>
                    <HistoryItem
                        date={item.date}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default History
