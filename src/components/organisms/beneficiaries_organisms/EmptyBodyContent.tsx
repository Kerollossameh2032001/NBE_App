import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import AddButton from '../../atoms/beneficiary_atoms/AddButton'
import { LanguageContext, ThemeContext } from '../../../App'

type EmptyBodyContentProps = {
    goToAdd?: () => void,
    emptyIcon: any,
    title: string | undefined
    subTitle1: string | undefined
    subTitle2: string | undefined
}
const EmptyBodyContent = ({ goToAdd, emptyIcon, title, subTitle1, subTitle2 }: EmptyBodyContentProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={emptyIcon} />

            <Text style={[{ paddingVertical: '3%' }, theme?.ThemeData.textStyle.titleMeduim]}>{title}</Text>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, { color: theme?.ThemeData.colors.secondaryTextColor }]}>{subTitle1} </Text>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, { color: theme?.ThemeData.colors.secondaryTextColor }]}>{subTitle2}</Text>

            {goToAdd && <AddButton
                textColor='white'
                style={{
                    backgroundColor: theme?.ThemeData.colors.primary,
                    padding: '2%',
                    width: '20%',
                    marginVertical: '5%'
                }}
                addEvent={goToAdd} />}

        </View>
    )
}

export default EmptyBodyContent
