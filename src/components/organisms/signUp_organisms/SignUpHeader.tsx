import React, { useContext } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import BackButton from '../../atoms/global_atoms/BackButton'
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand'
import { ThemeContext } from '../../../App';

type SignUpHeaderProps = {
    goBack: () => void;
    style?: StyleProp<ViewStyle>
}
function SignUpHeader({ goBack, style }: SignUpHeaderProps) {
    const theme = useContext(ThemeContext);

    return (
        <View style={[theme?.ThemeData.containerStyles.headerStyle,style]}>
            <BackButton onPress={goBack} />
            <DisplayAppBrand isPrimary={undefined} />
        </View>
    )
}

export default SignUpHeader
