import React, { useContext, useRef, useState } from 'react'
import { KeyboardTypeOptions, ScrollView, StyleProp, StyleSheet, Text, TextInput, TextStyle, Touchable, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../../App';

import Icon from 'react-native-vector-icons/FontAwesome';

type textFieldProps = {
    multiline?: boolean | undefined
    isPrimary?: boolean;
    isPassword?: boolean;
    placeholder: string | undefined;
    label?: string | undefined;
    value: any;
    setValue: React.Dispatch<React.SetStateAction<any>>;
    keyboardType?: KeyboardTypeOptions | undefined;
    prefixComponent?: JSX.Element;
    enableFocus?: boolean;
    maxLength?: number | undefined;
    style?: StyleProp<ViewStyle>
    textInputStyle?: StyleProp<TextStyle>
}

function TextField({
    label,
    placeholder,
    value,
    setValue,
    keyboardType,
    prefixComponent,
    isPrimary = true,
    enableFocus = true,
    isPassword = false,
    maxLength,
    style,
    textInputStyle,
    multiline
}: textFieldProps) {

    const theme = useContext(ThemeContext);
    const [isActive, setActive] = useState(false);
    const [hidePassword, setHidePassword] = isPassword ? useState(true) : useState(false);

    return (
        <View style={
            [
                theme?.ThemeData.inputStyles.inputTextContainer,
                isPrimary ? theme?.ThemeData.inputStyles.primaryInputColors : theme?.ThemeData.inputStyles.secondaryInputColors,
                isActive ? { borderColor: theme?.ThemeData.colors.primary } : { borderColor: theme?.ThemeData.colors.borderColor },
                style
            ]}>
            <View style={styles.container}>
                <View style={{ paddingRight: '3%' }}>
                    {prefixComponent}
                </View>

                <View>
                    {label === undefined ? <></> : <Text style={[
                        theme?.ThemeData.inputStyles.inputTextStyle,
                        styles.labelStyle,
                        isActive ? { color: theme?.ThemeData.colors.primary } : isPrimary ? { color: theme?.ThemeData.colors.labelTextColor } : { color: theme?.ThemeData.colors.textColor }
                    ]}>
                        {label}
                    </Text>}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TextInput
                            style={[
                                theme?.ThemeData.inputStyles.inputTextStyle,
                                isPrimary ? { color: theme?.ThemeData.colors.secondaryTextColor } : { color: theme?.ThemeData.colors.textColor },
                                { width: 250 },
                                textInputStyle
                            ]}
                            secureTextEntry={hidePassword}
                            focusable={true}
                            onFocus={() => enableFocus ? setActive(true) : setActive(false)}
                            onBlur={() => setActive(false)}
                            onChangeText={setValue}
                            value={value}
                            textAlignVertical='center'
                            multiline={multiline}
                            maxLength={maxLength}
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            scrollEnabled={true}
                            placeholderTextColor={
                                isPrimary ? theme?.ThemeData.colors.inputTextColor : theme?.ThemeData.colors.textColor
                            }
                            selectionColor={theme?.ThemeData.colors.primary}
                        />
                    </ScrollView>
                </View>

                {
                    isPassword ? (<TouchableOpacity
                        style={{ right: 0, position: 'absolute', }}
                        onPress={() => { setHidePassword(!hidePassword); }}
                    >
                        <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={30} color={theme?.ThemeData.colors.labelTextColor} />
                    </TouchableOpacity>) : (<></>)
                }
            </View>
        </View>
    )
}

export default TextField
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    labelStyle: {
        padding: 0,
        margin: 0,
        height: 18,
    },
})