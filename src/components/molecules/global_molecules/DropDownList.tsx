import React, { useContext } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App'
import { SelectList } from 'react-native-dropdown-select-list'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowDown19, faChevronDown, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'

type DropDownListProps = {
    selected: string,
    label: string | undefined
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    data: any
}
const DropDownList = ({ selected, setSelected, data, label }: DropDownListProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={
            [
                theme?.ThemeData.inputStyles.inputTextContainer,
                theme?.ThemeData.inputStyles.primaryInputColors,
                { borderColor: theme?.ThemeData.colors.borderColor, marginTop: '2%', paddingVertical: '1%' },
            ]}>
            <View
                style={styles.container}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={[
                        theme?.ThemeData.inputStyles.inputTextStyle,
                        styles.labelStyle,
                        { color: theme?.ThemeData.colors.secondaryTextColor },
                        { height: 25 }
                    ]}>
                        {label}
                    </Text>
                    <SelectList
                        setSelected={(val: any) => setSelected(val)}
                        data={data}
                        save="value"
                        boxStyles={{
                            paddingStart: 0, width: '100%', borderColor: 'transparent'
                        }}
                        inputStyles={{ ...theme?.ThemeData.textStyle.labelSmall, color: theme?.ThemeData.colors.secondaryTextColor, fontWeight: '400' }}
                        dropdownTextStyles={{ ...theme?.ThemeData.textStyle.labelSmall, color: theme?.ThemeData.colors.secondaryTextColor, fontWeight: '400' }}
                        searchicon={<FontAwesomeIcon icon={faSearch} color={theme?.ThemeData.colors.secondaryTextColor} />}
                        closeicon={<FontAwesomeIcon icon={faClose} color={theme?.ThemeData.colors.secondaryTextColor} />}
                        arrowicon={<FontAwesomeIcon icon={faChevronDown} color={theme?.ThemeData.colors.secondaryTextColor} />}
                        dropdownStyles={{
                            width: Dimensions.get('screen').width * 0.8,
                            borderColor: theme?.ThemeData.colors.primary,
                        }}

                        defaultOption={{ key: data[0].key, value: data[0].value }}
                    />
                </View>
            </View>
        </View>
    )
}

export default DropDownList
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