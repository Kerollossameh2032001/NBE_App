import React, { useContext } from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import DisplayAppBrand from '../../molecules/global_molecules/DisplayAppBrand'
import { LanguageContext, ThemeContext } from '../../../App'
import CustomButton from '../../atoms/global_atoms/CustomButton'
import { SignUpProps } from '../../../screens/authentication/SignUpScreen'


const FinishSignUpTemplate = ({ route, navigation }: SignUpProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    return (
        <ImageBackground style={styles.backGroundContainer} source={constantImages.finishBackGround}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={[theme?.ThemeData.containerStyles.headerStyle, { justifyContent: 'flex-end' }]}>
                <DisplayAppBrand isPrimary={false} />
            </View>

            <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>

                <View>
                    <Text style={theme?.ThemeData.textStyle.titleLarge}>{language?.languageData.finishTitle}</Text>
                    <Text style={theme?.ThemeData.textStyle.bodyMeduim}>{language?.languageData.finishSubTitle}</Text>
                </View>

                <CustomButton
                    style={[styles.buttonStyle, styles.bottomContent, { backgroundColor: '#FFF' }]}
                    textStyle={{ color: theme?.ThemeData.colors.primary }}
                    text={language?.languageData.finishBtnText}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Layout' }],
                    })}
                />
            </View>
        </ImageBackground>
    )
}

export default FinishSignUpTemplate

const styles = StyleSheet.create({
    backGroundContainer: {
        flex: 1,
    },
    bottomContent: {
        alignItems: 'center',
        marginBottom: '5%',
    },
    buttonStyle: {
        backgroundColor: '#FFFFF',
        marginBottom: '5%',
        width: '100%'
    }
})