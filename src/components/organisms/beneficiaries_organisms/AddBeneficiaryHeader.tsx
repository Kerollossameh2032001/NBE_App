import React, { useContext } from 'react'
import { View } from 'react-native'
import BackButton from '../../atoms/global_atoms/BackButton'
import NotificationButton from '../../atoms/global_atoms/NotificationButton'
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand'
import { ThemeContext } from '../../../App'

type AddBeneficiaryHeaderProps = {
    goBack: () => void;
}
const AddBeneficiaryHeader = ({ goBack }: AddBeneficiaryHeaderProps) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[theme?.ThemeData.containerStyles.headerStyle, { paddingVertical: 0, paddingHorizontal: 0 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <BackButton onPress={goBack} />
                <NotificationButton style={{
                    marginLeft: '3%', height: 50, width: 45, backgroundColor: theme?.ThemeData.colors.settingIconBackgroundColor
                }} onPress={() => { }} />
            </View>
            <DisplayAppBrand isPrimary={undefined} />
        </View>

    )
}

export default AddBeneficiaryHeader
