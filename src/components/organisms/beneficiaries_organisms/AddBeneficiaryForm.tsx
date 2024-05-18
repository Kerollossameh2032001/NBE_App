import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../molecules/global_molecules/TextField';
import DropDownList from '../../molecules/global_molecules/DropDownList';

type AddBeneficiaryFormProps = {
    firstName: string | undefined,
    setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>,

    lastName: string | undefined,
    setLastName: React.Dispatch<React.SetStateAction<string | undefined>>,

    accountNumber: string | undefined,
    setAccountNumber: React.Dispatch<React.SetStateAction<string | undefined>>,

    phoneNumber: string | undefined,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string | undefined>>,

    email: string | undefined,
    setEmail: React.Dispatch<React.SetStateAction<string>>,

    bankBranches: any
    bankBranch: string,
    setBankBranch: React.Dispatch<React.SetStateAction<string>>,
}
const AddBeneficiaryForm = ({
    firstName,
    setFirstName,
    bankBranch,
    bankBranches,
    lastName,
    setBankBranch,
    setLastName,
    accountNumber,
    email,
    phoneNumber,
    setAccountNumber,
    setEmail,
    setPhoneNumber
}: AddBeneficiaryFormProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    
    return (
        <View style={styles.formContainer}>
            <TouchableOpacity
                onPress={() => { }}
                style={[
                    styles.pickImageContainer,
                    { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }
                ]}>
                <FontAwesomeIcon
                    size={30}
                    color={theme?.ThemeData.colors.primary}
                    icon={faCamera}
                />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '0%', paddingTop: 0 }}>
                <TextField
                    placeholder='Enter first name'
                    setValue={setFirstName}
                    value={firstName}
                    enableFocus={true}
                    label='First name'
                    style={{ flex: 1, marginRight: '1.5%' }}
                />
                <TextField
                    placeholder='Enter last name'
                    setValue={setLastName}
                    value={lastName}
                    enableFocus={true}
                    label='Last name'
                    style={{ flex: 1, marginLeft: '1.5%' }}
                />
            </View>

            <DropDownList
                data={bankBranches}
                label='Bank branch'
                selected={bankBranch}
                setSelected={setBankBranch}
            />

            <TextField
                placeholder='EG150003004250008857447010180'
                label='Account number'
                enableFocus={true}
                setValue={setAccountNumber}
                value={accountNumber}
                style={{ width: '100%', marginTop: '2%' }}
            />

            <TextField
                placeholder='+20 101 131 5412'
                label='Phone number'
                enableFocus={true}
                setValue={setPhoneNumber}
                value={phoneNumber}
                keyboardType='numeric'
                style={{ width: '100%', marginTop: '2%' }}
            />

            <TextField
                placeholder='theahmadsami@gmail.com'
                label='Email'
                keyboardType='email-address'
                enableFocus={true}
                setValue={setEmail}
                value={email}
                style={{ width: '100%', marginTop: '2%' }}
            />
        </View>
    )
}

export default AddBeneficiaryForm
const styles = StyleSheet.create({
    pickImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingTop: '5%',
    },
})