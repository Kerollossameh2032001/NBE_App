import { useContext, useState } from 'react';
import { ThemeContext } from '../../../App';
import AppBar from '../../organisms/global_organisms/AppBar';
import BalanceCard from '../../organisms/home_oraganisms/BalanceCard';
import DisplayTabs from '../../organisms/home_oraganisms/DisplayTabs';
import SendMoney from '../../organisms/home_oraganisms/SendMoney';
import History from '../../organisms/home_oraganisms/History';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import DetailsCard from '../../organisms/home_oraganisms/DetailsCard';
import constantImages from '../../../core/constants/constant_images';

type HomeTempateProps = {
    openDrawer: () => void
}
const HomeTempate = ({ openDrawer }: HomeTempateProps) => {
    const theme = useContext(ThemeContext);
    const [isDetails, setIsDetails] = useState(false);
    const data = [
        { id: 1, image: constantImages.greenCard, accountNumber: '6506', balance: '$125,381.15' },
        { id: 2, image: constantImages.redCard, accountNumber: '8524', balance: '$123,666.80' },
        { id: 3, image: constantImages.greenCard, accountNumber: '9512', balance: '$11,156.80' }
    ];

    return (
        <View style={{ flex: 1 }}>

            <AppBar openDrawer={openDrawer} />

            {isDetails ?
                <FlatList
                    style={[styles.flatList]}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => setIsDetails(!isDetails)}>
                                <View style={styles.cardContainer}>
                                    <DetailsCard
                                        accountNumber={item.accountNumber}
                                        balance={item.balance}
                                        image={item.image}
                                    />
                                </View>
                            </TouchableOpacity>


                        );
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    pagingEnabled={true}
                /> :
                <TouchableOpacity onPress={() => setIsDetails(!isDetails)}>
                    <BalanceCard />
                </TouchableOpacity>
            }

            {!isDetails ? <DisplayTabs /> : <></>}
            {!isDetails ? <SendMoney /> : <></>}
            <History />
        </View>

    )
}
const styles = StyleSheet.create({
    flatList: {
        maxHeight: Dimensions.get('window').height * 0.34,
    },
    cardContainer: {
        height: Dimensions.get('window').height * 0.36,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HomeTempate

