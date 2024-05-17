import React, { useContext } from 'react'
import { View } from 'react-native'
import SectionHeader from '../../molecules/home_molecules/SectionHeader'
import { FlatList } from 'react-native-gesture-handler'
import HistoryItem from '../../molecules/home_molecules/HistoryItem'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext } from '../../../App'

const History = () => {
    const historyData = [
        {
            id: 1,
            image: constantImages.historyDummeyData.image1,
            name: 'Carrefour',
            date: '15-12-2021',
            price: '$250.21',
        },
        {
            id: 2,
            image: constantImages.historyDummeyData.image2,
            name: 'Amazon',
            date: '02-12-2021',
            price: '$3004.21',
        },
        {
            id: 3,
            image: constantImages.historyDummeyData.image3,
            name: 'Jumia',
            date: '28-11-2021',
            price: '$2146.63',
        },
        {
            id: 4,
            image: constantImages.historyDummeyData.image4,
            name: 'Hala Slimen',
            date: '12-11-2021',
            price: '$5140.00',
        },
        {
            id: 5,
            image: constantImages.historyDummeyData.image5,
            name: 'IKEA',
            date: '03-11-2021',
            price: '$12,547.96',
        },
        {
            id: 6,
            image: constantImages.historyDummeyData.image1,
            name: 'Carrefour',
            date: '15-12-2021',
            price: '$250.21',
        },
        {
            id: 7,
            image: constantImages.historyDummeyData.image2,
            name: 'Amazon',
            date: '02-12-2021',
            price: '$3004.21',
        },
        {
            id: 8,
            image: constantImages.historyDummeyData.image3,
            name: 'Jumia',
            date: '28-11-2021',
            price: '$2146.63',
        },
        {
            id: 9,
            image: constantImages.historyDummeyData.image4,
            name: 'Hala Slimen',
            date: '12-11-2021',
            price: '$5140.00',
        },
        {
            id: 10,
            image: constantImages.historyDummeyData.image5,
            name: 'IKEA',
            date: '03-11-2021',
            price: '$12,547.96',
        },
        {
            id: 11,
            image: constantImages.historyDummeyData.image1,
            name: 'Carrefour',
            date: '15-12-2021',
            price: '$250.21',
        },
        {
            id: 12,
            image: constantImages.historyDummeyData.image2,
            name: 'Amazon',
            date: '02-12-2021',
            price: '$3004.21',
        },
        {
            id: 13,
            image: constantImages.historyDummeyData.image3,
            name: 'Jumia',
            date: '28-11-2021',
            price: '$2146.63',
        },
        {
            id: 14,
            image: constantImages.historyDummeyData.image4,
            name: 'Hala Slimen',
            date: '12-11-2021',
            price: '$5140.00',
        },
        {
            id: 15,
            image: constantImages.historyDummeyData.image5,
            name: 'IKEA',
            date: '03-11-2021',
            price: '$12,547.96',
        },
        {
            id: 16,
            image: constantImages.historyDummeyData.image1,
            name: 'Carrefour',
            date: '15-12-2021',
            price: '$250.21',
        },
        {
            id: 17,
            image: constantImages.historyDummeyData.image2,
            name: 'Amazon',
            date: '02-12-2021',
            price: '$3004.21',
        },
        {
            id: 18,
            image: constantImages.historyDummeyData.image3,
            name: 'Jumia',
            date: '28-11-2021',
            price: '$2146.63',
        },
        {
            id: 19,
            image: constantImages.historyDummeyData.image4,
            name: 'Hala Slimen',
            date: '12-11-2021',
            price: '$5140.00',
        },
        {
            id: 20,
            image: constantImages.historyDummeyData.image5,
            name: 'IKEA',
            date: '03-11-2021',
            price: '$12,547.96',
        },
    ];

    const language = useContext(LanguageContext)
    return (
        <View style={{ flex: 1 }}>
            <SectionHeader title={language?.languageData.homeTabsTitles.history} viewAllAction={() => { }} />
            <FlatList
                style={{ paddingVertical: '5%', flex: 1 }}
                data={historyData}
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
