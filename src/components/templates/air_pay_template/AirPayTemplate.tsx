import React, { useContext, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, PanResponderGestureState, StyleSheet, Text, View } from 'react-native';
import { LanguageContext, ThemeContext } from '../../../App';
import DragableComponent from '../../molecules/airPay_molecule/DragableComponent';
import constantImages from '../../../core/constants/constant_images';
import DetailsCard from '../../organisms/home_oraganisms/DetailsCard';
import CustomButton from '../../atoms/global_atoms/CustomButton';
import SelectCard from '../../organisms/air_pay_organisms/SelectCard';


const AirPayTemplate = () => {
    const language = useContext(LanguageContext);
    const data = [
        { id: 1, image: constantImages.greenCard, accountNumber: '6506', balance: '$125,381.15' },
        { id: 2, image: constantImages.redCard, accountNumber: '8524', balance: '$123,666.80' },
        { id: 3, image: constantImages.greenCard, accountNumber: '9512', balance: '$11,156.80' }
    ];

    const dropAreaLayoutRef = useRef<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, height: 0, width: 0 });
    const [currentCardIndex, setCurrentCardIndex] = useState<number | undefined>();

    const handleDrop = (gesture: PanResponderGestureState) => {
        if (!dropAreaLayoutRef) return false;

        const { moveX, moveY } = gesture;
        const { x, y, width, height } = dropAreaLayoutRef.current;

        if (
            moveX >= x &&
            moveX <= x + width &&
            moveY >= y &&
            moveY <= y + height
        ) {
            return true;
        }
        return false;
    };


    return (
        <View style={{ flex: 1 }}>
            <SelectCard
                currentCardIndex={currentCardIndex}
                dropAreaLayoutRef={dropAreaLayoutRef}
                handleDrop={handleDrop}
                setCurrentCardIndex={setCurrentCardIndex}
                data={data}
            />
            <CustomButton
                style={{ marginTop: '5%', }}
                text={language?.languageData.airPayBtnTxt}
                suffix={(<Image style={{ width: 32, height: 32 }} source={constantImages.meduimFingerIcon} />)}
                onPress={() => { }} />
        </View>

    )
}

export default AirPayTemplate
const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        //backgroundColor: 'red',
    },
    cardContainer: {
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dropArea: {
        position: 'absolute',
        bottom: '3%',
        borderWidth: 2,
        zIndex: -1,
        borderRadius: 27,
        width: Dimensions.get('window').width * 0.9, // Full width of the screen
        height: '45%',
        borderStyle: 'dashed',
    }
});
