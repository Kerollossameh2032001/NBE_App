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

            <View style={styles.nameContainer}>
                <TextField
                    label={language?.languageData.firstNameLabel}
                    placeholder={language?.languageData.firstNamePlaceholder}
                    setValue={setFirstName}
                    value={firstName}
                    enableFocus={true}
                    style={{ flex: 1, marginRight: '1.5%' }}
                />
                <TextField
                    label={language?.languageData.lastNameLabel}
                    placeholder={language?.languageData.lastNamePlaceholder}
                    setValue={setLastName}
                    value={lastName}
                    enableFocus={true}
                    style={{ flex: 1, marginLeft: '1.5%' }}
                />
            </View>

            <DropDownList
                label={language?.languageData.bankBranchLabel}
                data={bankBranches}
                selected={bankBranch}
                setSelected={setBankBranch}
            />

            <TextField
                label={language?.languageData.accountNumberLabel}
                placeholder='EG150003004250008857447010180'
                enableFocus={true}
                setValue={setAccountNumber}
                value={accountNumber}
                style={styles.textFieldStyle}
            />

            <TextField
                label={language?.languageData.phoneNumberLabel}
                placeholder='+20 101 131 5412'
                enableFocus={true}
                setValue={setPhoneNumber}
                value={phoneNumber}
                keyboardType='numeric'
                style={styles.textFieldStyle}
            />

            <TextField
                label={language?.languageData.emailLabel}
                placeholder='theahmadsami@gmail.com'
                keyboardType='email-address'
                enableFocus={true}
                setValue={setEmail}
                value={email}
                style={styles.textFieldStyle}
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

    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '0%',
        paddingTop: 0,
    },
    textFieldStyle: {
        width: '100%',
        marginTop: '2%'
    }
})