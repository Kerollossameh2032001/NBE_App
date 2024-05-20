// Light theme setting

import { StyleSheet } from "react-native";

const lightTheme = {
    colors: {
        primary: "#007236",
        secondary: "#F6A721",
        textColor: '#FFFFFF',
        secondaryTextColor: '#1C2437',
        labelTextColor: '#8a8a8b',
        inputTextColor: '#808080',
        borderColor: "#FFFFFF80",
        backgroundColor: "#F1F3FB",
        settingIconBackgroundColor: '#c6c7ce',
        iconColor: '#1C2437'
    },

    textStyle: StyleSheet.create({
        titleLarge: {
            fontWeight: '700',
            color: '#FFFFFF',
            fontFamily: 'Roboto-Bold',
            fontSize: 40,
        },
        titleMeduim: {
            color: '#1C2437',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
            fontSize: 20,
        },

        labelMeduim: {
            fontWeight: '700',
            fontSize: 16,
            fontFamily: 'Roboto-Bold',
            color: '#007236',
        },
        labelSmall: {
            color: '#FFFFFF',
            fontFamily: 'Roboto-Light',
            fontWeight: '400',
            fontSize: 14,
        },

        bodySmall: {
            color: '#FFFFFF',
            fontFamily: 'Roboto-Light',
            fontWeight: '400',
            fontSize: 10,
        },

        bodyMeduim: {
            color: '#FFFFFF',
            fontFamily: 'Roboto-Bold',
            fontWeight: '400',
            fontSize: 16,
        }
    }),

    buttonStyles: StyleSheet.create({
        toggleButtonStyle: {
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            //elevation: 12,
            padding: 10,
            marginVertical: 20,
            marginHorizontal: 10,
            // width: 50,
            // height: 50
        },

        elevatedButton: {
            backgroundColor: '#007236',
            borderRadius: 12.5,
            paddingVertical: 12,
            alignItems: "center",
        },

    }),

    inputStyles: StyleSheet.create({
        primaryInputColors: {
            backgroundColor: '#FFFFFF',
        },
        secondaryInputColors: {
            backgroundColor: '#0000004D',
        },

        inputTextContainer: {
            borderRadius: 10,
            borderStyle: 'solid',
            borderWidth: 1.5,
            paddingHorizontal: '5%',
            paddingVertical: '2%',
            //marginHorizontal: '5%',
            marginTop: '5%',
        },

        inputTextStyle: {
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'Roboto-Bold',
        }

    }),

    containerStyles: StyleSheet.create({
        headerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            paddingVertical: '15%',
        },

        signUpTemplateContainer: {
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
        },

        layoutTemplateContainer: {
            paddingHorizontal: '5%',
            paddingVertical: '5%',
        }
    })
};

export default lightTheme;