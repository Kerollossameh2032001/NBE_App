import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../../App';
import BuildGridItem from '../../molecules/beneficiary_molecules/BuildGridItem';
import { binifeciaryAccountDataType } from '../../../core/dummy_data/BeneficiaryData';
type GridBodyContentProps = {
    data: binifeciaryAccountDataType[],
    goToDetails: (itemId: number) => void,
}
const GridBodyContent = ({ data, goToDetails }: GridBodyContentProps) => {
    const theme = useContext(ThemeContext);
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) =>
                <BuildGridItem
                    model={item}
                    onPress={() => goToDetails(item.key)}
                />
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key.toString()}
            numColumns={4}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.container}
        />
    )
}

export default GridBodyContent
const styles = StyleSheet.create({
    container: {},
    row: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        paddingVertical: '3%'
    },
})