import { useContext, useState } from 'react';
import { ThemeContext } from '../../../App';
import AppBar from '../../organisms/global_organisms/AppBar';
import BalanceCard from '../../organisms/home_oraganisms/BalanceCard';
import DisplayTabs from '../../organisms/home_oraganisms/DisplayTabs';
import SendMoney from '../../organisms/home_oraganisms/SendMoney';
import History from '../../organisms/home_oraganisms/History';
import { TouchableOpacity, View } from 'react-native';
import DetailsCard from '../../organisms/home_oraganisms/DetailsCard';

type HomeTempateProps = {
    openDrawer: () => void
}
const HomeTempate = ({ openDrawer }: HomeTempateProps) => {
    const theme = useContext(ThemeContext);
    const [isDetails, setIsDetails] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            
            <AppBar openDrawer={openDrawer} />

            <TouchableOpacity onPress={() => setIsDetails(!isDetails)}>
                {isDetails ? <DetailsCard /> : <BalanceCard />}
            </TouchableOpacity>

            {!isDetails ? <DisplayTabs /> : <></>}
            {!isDetails ? <SendMoney /> : <></>}
            <History />
        </View>

    )
}

export default HomeTempate

