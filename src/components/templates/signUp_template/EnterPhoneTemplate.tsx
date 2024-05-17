import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App';
import EnterPhoneContent from '../../organisms/signUp_organisms/EnterPhoneContent';
import GoToVerification from '../../organisms/signUp_organisms/GoToVerification';
//import PhoneIcon from '../../atoms/';
//<Icon size={30} name='mobile' color='#B7B7B7'/>

type EnterPhoneTemplateProps = {
    goNext: () => void;
    number: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
}
const EnterPhoneTemplate = ({ goNext, number, setNumber }: EnterPhoneTemplateProps) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>
            <EnterPhoneContent number={number} setNumber={setNumber} />
            <GoToVerification number={number} goToVerify={goNext} />
        </View>
    )
}

export default EnterPhoneTemplate
const styles = StyleSheet.create({
    templateContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
});