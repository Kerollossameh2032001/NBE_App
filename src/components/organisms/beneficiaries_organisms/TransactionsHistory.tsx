import React from 'react'
import { FlatList, Text, View } from 'react-native'
import HistoryItem from '../../molecules/home_molecules/HistoryItem'
import { historyDataType } from '../../../core/dummy_data/BeneficiaryData'

type TransactionsHistoryProps = {
    data: any
}
const TransactionsHistory = ({ data }: TransactionsHistoryProps) => {
    return (
        <FlatList
            style={{ paddingVertical: '5%', flex: 1 }}
            data={data}
            renderItem={({ item }) =>
                <HistoryItem
                    date={item.date}
                    name={item.title}
                    price={item.amount}
                />
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default TransactionsHistory
