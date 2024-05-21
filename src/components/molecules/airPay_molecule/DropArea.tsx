import React, { useContext } from 'react'
import { Dimensions, PanResponderGestureState, StyleSheet, Text, View } from 'react-native';
import DetailsCard from '../../organisms/home_oraganisms/DetailsCard';
import { LanguageContext, ThemeContext } from '../../../App';

type DropAreaProps = {
    currentCardIndex: number | undefined,
    dropAreaLayoutRef: React.MutableRefObject<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>,
    data: {
        id: number;
        image: any;
        accountNumber: string;
        balance: string;
    }[]
}
const DropArea = ({ data, currentCardIndex, dropAreaLayoutRef }: DropAreaProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View
            onLayout={(event) => {
                const { width, x, y, height } = event.nativeEvent.layout
                dropAreaLayoutRef.current = { x, y, width, height };
            }}
            style={[
                styles.cardContainer,
                { borderColor: theme?.ThemeData.colors.primary },
                styles.dropArea
            ]}>
            {currentCardIndex === undefined ?
                <View>
                    <Text style={theme?.ThemeData.textStyle.labelMeduim}>{language?.languageData.dropArea.title1}</Text>
                    <Text style={theme?.ThemeData.textStyle.labelMeduim}>{language?.languageData.dropArea.title2}</Text>
                </View> :
                <View style={[styles.cardContainer, { marginTop: '7%' }]}>
                    <DetailsCard
                        accountNumber={data[currentCardIndex].accountNumber}
                        balance={data[currentCardIndex].balance}
                        image={data[currentCardIndex].image}
                    />
                </View>
            }

        </View>
    )
}

export default DropArea
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
