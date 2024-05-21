import React, { useContext } from 'react'
import { Dimensions, FlatList, PanResponderGestureState, StyleSheet, Text, View } from 'react-native';
import { LanguageContext, ThemeContext } from '../../../App';
import DetailsCard from '../home_oraganisms/DetailsCard';
import DisplayCards from '../../molecules/airPay_molecule/DisplayCards';
import DropArea from '../../molecules/airPay_molecule/DropArea';

type SelectCardProps = {
    setCurrentCardIndex: React.Dispatch<React.SetStateAction<number | undefined>>
    handleDrop: (gesture: PanResponderGestureState) => boolean
    currentCardIndex: number | undefined
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
const SelectCard = ({ data, setCurrentCardIndex, dropAreaLayoutRef, handleDrop, currentCardIndex }: SelectCardProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View style={{ flex: 1, paddingVertical: '5%', }}>
            <Text style={theme?.ThemeData.textStyle.titleMeduim}>{language?.languageData.airPayTitle}</Text>
            <DisplayCards
                data={data}
                dropAreaLayoutRef={dropAreaLayoutRef}
                handleDrop={handleDrop}
                setCurrentCardIndex={setCurrentCardIndex}
            />
            <DropArea
                data={data}
                currentCardIndex={currentCardIndex}
                dropAreaLayoutRef={dropAreaLayoutRef}
            />
        </View>
    )
}

export default SelectCard
