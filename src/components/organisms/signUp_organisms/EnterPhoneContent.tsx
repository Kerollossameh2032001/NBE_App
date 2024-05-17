import React, { useContext } from 'react'
import { View } from 'react-native'
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent'
import TextField from '../../molecules/global_molecules/TextField'
import PhoneIcon from '../../atoms/global_atoms/PhoneIcon'
import { LanguageContext, ThemeContext } from '../../../App'

type EnterPhoneContentProps = {
    number: string ;
    setNumber: React.Dispatch<React.SetStateAction<string>>
}
const EnterPhoneContent = ({ number, setNumber }: EnterPhoneContentProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View>
            <TitlesComponent
                title={language?.languageData.enterMobileTitle}
                subTitle={language?.languageData.enterMobileSubTitle}
            />
            <TextField
                label={language?.languageData.enterMobileTitle}
                placeholder='+201285447728'
                setValue={setNumber}
                value={number}
                enableFocus={true}
                prefixComponent={(<PhoneIcon />)}
            />
        </View>
    )
}

export default EnterPhoneContent
