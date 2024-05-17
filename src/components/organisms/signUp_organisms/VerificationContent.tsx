import React, { useContext, useRef, useState } from 'react'
import { LanguageContext, ThemeContext } from '../../../App';
import { Text, TextInput, View } from 'react-native';
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent';
import VerifyItem from '../../molecules/global_molecules/VerifyItem';


type VerificationContentProps = {
    title: string | undefined,
    subTitle: string | undefined,
    email?: string | undefined,
    phoneNumber: string;
    digitOne: string;
    digitTwo: string;
    digitThree: string;
    digitFour: string;
    digitFive: string;
    setDigitOne: React.Dispatch<React.SetStateAction<string>>;
    setDigitTwo: React.Dispatch<React.SetStateAction<string>>;
    setDigitThree: React.Dispatch<React.SetStateAction<string>>;
    setDigitFour: React.Dispatch<React.SetStateAction<string>>;
    setDigitFive: React.Dispatch<React.SetStateAction<string>>;
}
const VerificationContent = ({
    title,
    subTitle,
    phoneNumber,
    digitOne,
    digitTwo,
    digitThree,
    digitFour,
    digitFive,
    setDigitOne,
    setDigitTwo,
    setDigitThree,
    setDigitFour,
    setDigitFive,
    email
}: VerificationContentProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    const [index, setIndex] = useState<number>(1);
    const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

    return (
        <View>
            <TitlesComponent
                title={title}
                subTitle={subTitle + ' ' + phoneNumber}
            />

            <View style={{ flexDirection: 'row' }}>
                <VerifyItem digit={digitOne} setDigit={setDigitOne} index={1} focusIndex={index} setFocusIndex={setIndex} inputRef={inputRefs[1]} />
                <VerifyItem digit={digitTwo} setDigit={setDigitTwo} index={2} focusIndex={index} setFocusIndex={setIndex} inputRef={inputRefs[2]} />
                <VerifyItem digit={digitThree} setDigit={setDigitThree} index={3} focusIndex={index} setFocusIndex={setIndex} inputRef={inputRefs[3]} />
                <VerifyItem digit={digitFour} setDigit={setDigitFour} index={4} focusIndex={index} setFocusIndex={setIndex} inputRef={inputRefs[4]} />
                <VerifyItem digit={digitFive} setDigit={setDigitFive} index={5} focusIndex={index} setFocusIndex={setIndex} inputRef={inputRefs[5]} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={[
                        theme?.ThemeData.textStyle.bodySmall,
                        { color: theme?.ThemeData.colors.labelTextColor, fontSize: 16 }
                    ]}>{language?.languageData.verificationReceivecode}</Text>

                    <Text style={[
                        theme?.ThemeData.textStyle.titleMeduim,
                        { fontSize: 16 }
                    ]}>{language?.languageData.verificationRequesAgainBtn + '00:12'}</Text>
                </View>
                <Text style={[
                    theme?.ThemeData.textStyle.labelSmall,
                    {color: theme?.ThemeData.colors.secondaryTextColor, fontFamily:'Roboto-Bold'}
                    ]}>{email}</Text>
            </View>

        </View>
    )
}

export default VerificationContent
