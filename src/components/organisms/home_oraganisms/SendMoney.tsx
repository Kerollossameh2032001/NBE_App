import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import SectionHeader from '../../molecules/home_molecules/SectionHeader'
import ConnectionItem from '../../molecules/home_molecules/ConnectionItem'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext } from '../../../App'

const SendMoney = () => {
    const connectionData = [
        { id: 1, image: constantImages.connectionDummeyData.image1, name: 'Hala', },
        { id: 2, image: constantImages.connectionDummeyData.image2, name: 'Ayman', },
        { id: 3, image: constantImages.connectionDummeyData.image3, name: 'Alex', },
        { id: 4, image: constantImages.connectionDummeyData.image4, name: 'Soha', },
        { id: 5, image: constantImages.connectionDummeyData.image1, name: 'Hala', },
        { id: 6, image: constantImages.connectionDummeyData.image2, name: 'Ayman', },
        { id: 7, image: constantImages.connectionDummeyData.image3, name: 'Alex', },
        { id: 8, image: constantImages.connectionDummeyData.image4, name: 'Soha', },
        { id: 9, image: constantImages.connectionDummeyData.image1, name: 'Hala', },
        { id: 10, image: constantImages.connectionDummeyData.image2, name: 'Ayman', },
        { id: 11, image: constantImages.connectionDummeyData.image3, name: 'Alex', },
        { id: 12, image: constantImages.connectionDummeyData.image4, name: 'Soha', },
        { id: 13, image: constantImages.connectionDummeyData.image1, name: 'Hala', },
        { id: 14, image: constantImages.connectionDummeyData.image2, name: 'Ayman', },
        { id: 15, image: constantImages.connectionDummeyData.image3, name: 'Alex', },
        { id: 16, image: constantImages.connectionDummeyData.image4, name: 'Soha', },
    ];
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
