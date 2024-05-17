import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomSwitchTab from '../../molecules/beneficiary_molecules/CustomSwitchTab'
import constantImages from '../../../core/constants/constant_images'
import { LanguageContext, ThemeContext } from '../../../App'
import AddButton from '../../atoms/beneficiary_atoms/AddButton'

type BeneficiaryHeaderProps = {
    isGrid: boolean,
    setIsGrid: React.Dispatch<React.SetStateAction<boolean>>
    addEvent: () => void,
}
const BeneficiaryHeader = ({ isGrid, setIsGrid, addEvent }: BeneficiaryHeaderProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View style={styles.headerContainer}>

            <Text style={theme?.ThemeData.textStyle.titleMeduim}>{language?.languageData.beneficiaryTitle}</Text>

            <View style={{ flexDirection: 'row' }}>
                <CustomSwitchTab
                    isGrid={isGrid}
                    setIsGrid={setIsGrid}
                />

                <AddButton  addEvent={addEvent}/>

            </View>


        </View>
    )
}

export default BeneficiaryHeader;

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})