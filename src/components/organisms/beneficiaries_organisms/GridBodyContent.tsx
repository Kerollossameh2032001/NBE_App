import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../../App';
import BuildGridItem from '../../molecules/beneficiary_molecules/BuildGridItem';
type GridBodyContentProps = {
    data: {
        key: string;
        name: string;
        lastName: string;
        image: any;
        number: string;
        accountBalance: string;
    }[],
}
const GridBodyContent = ({ data }: GridBodyContentProps) => {
    const theme = useContext(ThemeContext);
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) =>
                <BuildGridItem
                    model={item}
                    onPress={() => { }}
                />
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key}
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