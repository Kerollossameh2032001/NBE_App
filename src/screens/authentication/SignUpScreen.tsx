import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../core/constants/RootStackParamList';
import EnterPhoneTemplate from '../../components/templates/signUp_template/EnterPhoneTemplate';
import SignUpHeader from '../../components/organisms/signUp_organisms/SignUpHeader';
import VerificationPhoneTemplate from '../../components/templates/signUp_template/VerificationPhoneTemplate';
import EnterPasswordTemplate from '../../components/templates/signUp_template/EnterPasswordTemplate';
import FinishSignUpTemplate from '../../components/templates/signUp_template/FinishSignUpTemplate';
import { ThemeContext } from '../../App';
import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';

export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

const SignUpScreen = ({ navigation, route }: SignUpProps) => {
  const [number, setNumber] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [error, setError] = useState('');

  // Function to sign in with phone number
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await firebase.auth().signInWithPhoneNumber(number);
      setConfirm(confirmation);
      console.log('ll');
      
    } catch (err: any) {
      console.log('sdf');
      
      console.log(err.message);
      
      setError(err.message);
    }
  };

  // Function to confirm the OTP code
  const confirmCode = async (code: string) => {
    try {
      await confirm?.confirm(code);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const getCurrentTemp = () => {
    switch (step) {
      case 0:
        return (<EnterPhoneTemplate
          goNext={() => {
            signInWithPhoneNumber();
            setStep(1);
          }}
          number={number}
          setNumber={setNumber}
        />)
        break;
      case 1:
        return (<VerificationPhoneTemplate
          phoneNumber={number}
          goNext={() => setStep(2)}
          confirmCode={confirmCode}
          error={error}
        />)

      case 2:
        return (<EnterPasswordTemplate
          goNext={() => { setStep(3) }}
        />)

      case 3:
        return (<FinishSignUpTemplate route={route} navigation={navigation} />)
      default:
        (<EnterPhoneTemplate
          goNext={() => setStep(1)}
          number={number}
          setNumber={setNumber}
        />)
        break;
    }
  }

  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }}>
      {step == 3 ? (<></>) : (<SignUpHeader goBack={() => {
        if (step > 0) {
          setStep(step - 1);
        } else {
          navigation.goBack();
        }
      }} />)}
      {getCurrentTemp()}
    </View>
  )
}

export default SignUpScreen
