import React from 'react'
import { Dimensions, FlatList, PanResponderGestureState, StyleSheet, View } from 'react-native';
import DragableComponent from './DragableComponent';
import DetailsCard from '../../organisms/home_oraganisms/DetailsCard';

type DisplayCardsProps = {
    handleDrop: (gesture: PanResponderGestureState) => boolean
    setCurrentCardIndex: React.Dispatch<React.SetStateAction<number | undefined>>
    dropAreaLayoutRef: React.MutableRefObject<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>
    data: {
        id: number;
        image: any;
        accountNumber: string;
        balance: string;
    }[]
}
const DisplayCards = ({ data, dropAreaLayoutRef, setCurrentCardIndex, handleDrop }: DisplayCardsProps) => {
    return (
        <FlatList
            style={[styles.flatList]}
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <DragableComponent
                        index={index}
                        setCurrentIndex={setCurrentCardIndex}
                        dropAreaPosition={dropAreaLayoutRef}
                        onDrop={handleDrop}
                        content={(
                            <View style={styles.cardContainer}>
                                <DetailsCard
                                    accountNumber={item.accountNumber}
                                    balance={item.balance}
                                    image={item.image}
                                />
                            </View>
                        )} />
                );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled={true}
        />
    )
}

export default DisplayCards
const styles = StyleSheet.create({
    flatList: {
        flex: 1,
    },
    cardContainer: {
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
})