import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import AddButton from '../../atoms/beneficiary_atoms/AddButton'
import { LanguageContext, ThemeContext } from '../../../App'

const EmptyBodyContent = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={constantImages.noContentIcon} />

            <Text style={[{paddingVertical: '3%'},theme?.ThemeData.textStyle.titleMeduim]}>{language?.languageData.noContentTitle}</Text>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, {color: theme?.ThemeData.colors.secondaryTextColor}]}>{language?.languageData.noContentSubTitle1} </Text>
            <Text style={[theme?.ThemeData.textStyle.labelSmall, {color: theme?.ThemeData.colors.secondaryTextColor}]}>{language?.languageData.noContentSubTitle2}</Text>

            <AddButton
                textColor='white'
                style={{
                    backgroundColor: theme?.ThemeData.colors.primary,
                    padding: '2%',
                    width: '20%',
                    marginVertical: '5%'
                }}
                addEvent={() => { }} />

        </View>
    )
}

export default EmptyBodyContent
