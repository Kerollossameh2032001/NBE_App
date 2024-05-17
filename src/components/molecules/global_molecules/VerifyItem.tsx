import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import TextField from './TextField';
import { ThemeContext } from '../../../App';

type VerifyItemProps = {
    digit: string ;
    setDigit: React.Dispatch<React.SetStateAction<string>>;
    // currentIndex: number;
    // setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
    // isFocus: boolean;
    inputRef: React.RefObject<TextInput>;
    index: number;
    focusIndex: number;
    setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
}
const VerifyItem = ({ digit, setDigit, index, focusIndex, setFocusIndex, inputRef }: VerifyItemProps) => {
    const theme = useContext(ThemeContext);
    const [isActive, setActive] = useState(index === focusIndex);
    // const inputRef = useRef<TextInput>(null);
    useEffect(() => {
        if (index === focusIndex) {
            inputRef.current?.focus();
        }
    }, [focusIndex]);
    return (
        <View style={
            [
                theme?.ThemeData.inputStyles.inputTextContainer,
                theme?.ThemeData.inputStyles.primaryInputColors,
                isActive ? { borderColor: theme?.ThemeData.colors.primary } : { borderColor: theme?.ThemeData.colors.borderColor },
                styles.itemContainer
            ]}>

            <View>
                <TextInput
                    ref={inputRef}
                    style={[
                        theme?.ThemeData.inputStyles.inputTextStyle,
                        { color: theme?.ThemeData.colors.secondaryTextColor },
                        { width: '100%', justifyContent: 'center', alignItems: 'center' }
                    ]}
                    focusable={true}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onChangeText={(text) => {
                        inputRef.current?.blur();
                        setActive(false);
                        setDigit(text);
                        console.log(focusIndex);

                        setFocusIndex(index + 1 === 5 ? 5 : index + 1);
                    }}
                    value={digit}
                    placeholder='__'
                    keyboardType='numeric'
                    maxLength={1}
                    scrollEnabled={true}
                    placeholderTextColor={
                        theme?.ThemeData.colors.inputTextColor
                    }
                    selectionColor={theme?.ThemeData.colors.primary}
                />
            </View>
        </View>

    )
}

export default VerifyItem;

const styles = StyleSheet.create({
    itemContainer: {
        width: 45,
        height: 65,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
        marginRight: '5%',
    }
});
