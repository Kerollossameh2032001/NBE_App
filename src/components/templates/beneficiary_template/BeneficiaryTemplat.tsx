import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppBar from '../../organisms/global_organisms/AppBar'
import { ThemeContext } from '../../../App'
import CustomToggleButton from '../../atoms/global_atoms/CustomToggleButton'
import constantImages from '../../../core/constants/constant_images'
import CustomSwitchTab from '../../molecules/beneficiary_molecules/CustomSwitchTab'
import BeneficiaryHeader from '../../organisms/beneficiaries_organisms/BeneficiaryHeader'
import ListBodyContent from '../../organisms/beneficiaries_organisms/ListBodyContent'
import EmptyBodyContent from '../../organisms/beneficiaries_organisms/EmptyBodyContent'

type BeneficiaryTemplatProps = {
    openDrawer: () => void,
}
const BeneficiaryTemplat = ({ openDrawer }: BeneficiaryTemplatProps) => {
    const theme = useContext(ThemeContext);
    const [isGrid, setIsGrid] = useState<boolean>(true);
    return (
        <View style={{ flex: 1 }}>
            <AppBar openDrawer={openDrawer} />
            <BeneficiaryHeader
                isGrid={isGrid}
                setIsGrid={setIsGrid}
                addEvent={() => { }} />
            <EmptyBodyContent />
        </View>
    )
}

export default BeneficiaryTemplat
const styles = StyleSheet.create({

})