import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../../App'
import BackButton from '../../atoms/global_atoms/BackButton';
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand';
import NotificationButton from '../../atoms/global_atoms/NotificationButton';
import AddBeneficiaryHeader from '../../organisms/beneficiaries_organisms/AddBeneficiaryHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import TextField from '../../molecules/global_molecules/TextField';
import DropDownList from '../../molecules/global_molecules/DropDownList';
import CustomButton from '../../atoms/global_atoms/CustomButton';
import AddBeneficiaryForm from '../../organisms/beneficiaries_organisms/AddBeneficiaryForm';

type AddBeneficiaryTemplateProps = {
  goBack: () => void;
}
const AddBeneficiaryTemplate = ({ goBack }: AddBeneficiaryTemplateProps) => {
  const theme = useContext(ThemeContext);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [accountNumber, setAccountNumber] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [bankBranch, setBankBranch] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const bankBranches = [
    { key: '1', value: '001 - Downtown Branch' },
    { key: '2', value: '002 - Midtown Branch' },
    { key: '3', value: '003 - Uptown Branch' },
    { key: '4', value: '004 - Eastside Branch' },
    { key: '5', value: '005 - Westside Branch' },
    { key: '6', value: '006 - Southside Branch' },
    { key: '7', value: '007 - Northside Branch' },
    { key: '8', value: '008 - Water Way Mall Branch' },
  ];
  return (
    <View style={{ flex: 1 }}>
      <AddBeneficiaryHeader goBack={goBack} />
      <KeyboardAvoidingView  style={{ flex: 1 }} behavior="padding">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[
            theme?.ThemeData.containerStyles.signUpTemplateContainer,
            { paddingHorizontal: 0 }
          ]}>

            <AddBeneficiaryForm
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              bankBranches={bankBranches}
              bankBranch={bankBranch}
              setBankBranch={setBankBranch}
              accountNumber={accountNumber}
              setAccountNumber={setAccountNumber}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              email={email}
              setEmail={setEmail}
            />
            <CustomButton style={{ marginTop: '5%', width: '100%' }} text='Add Beneficiar' onPress={() => { }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  )
}

export default AddBeneficiaryTemplate

