import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, LayoutChangeEvent, PanResponder, ScrollView, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../core/constants/constant_images'
import DetailsCard from '../../components/organisms/home_oraganisms/DetailsCard'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from '../../App';
import AppBar from '../../components/organisms/global_organisms/AppBar';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import CustomStatusBar from '../../components/atoms/global_atoms/CustomStatusBar';
import DrawerContent from '../../components/organisms/login_organisms/DrawerContent';
import DragableComponent from '../../components/molecules/airPay_molecule/DragableComponent';
import CustomButton from '../../components/atoms/global_atoms/CustomButton';



const Drawer = createDrawerNavigator();

export const AirPayScreenWithDrawer = () => {
    const theme = useContext(ThemeContext);
    return (
        <Drawer.Navigator
            initialRouteName='AirPayScreen'
            drawerContent={DrawerContent}
            screenOptions={{
                drawerStyle: {
                    padding: '3%',
                    borderTopEndRadius: 40,
                    borderBottomEndRadius: 40,
                    backgroundColor: theme?.ThemeData.colors.backgroundColor
                }
            }}>
            <Drawer.Screen name='AirPayScreen' component={AirPayScreen}
                options={{
                    headerShown: false
                }} />
        </Drawer.Navigator>
    );
}



const AirPayScreen = () => {
    const navigation = useNavigation<any>();
    const theme = useContext(ThemeContext);
    const data = [
        { id: 1, image: constantImages.greenCard }, { id: 2, image: constantImages.redCard }, { id: 3, image: constantImages.greenCard }]

    return (
        <View style={[theme?.ThemeData.containerStyles.layoutTemplateContainer, { flex: 1, backgroundColor: theme?.ThemeData.colors.backgroundColor }]}>
            <CustomStatusBar />
            <AppBar openDrawer={() => {
                console.log('kerol');
                navigation.dispatch(DrawerActions.toggleDrawer())
            }} />

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingVertical: '5%', }}>
                    <Text style={theme?.ThemeData.textStyle.titleMeduim}>Cards</Text>
                    <FlatList
                        style={[styles.flatList]}
                        data={data}
                        renderItem={({ item }) => (
                            <DragableComponent
                                dropArea={(<View
                                    style={[
                                        styles.cardContainer,
                                        { borderColor: theme?.ThemeData.colors.primary },
                                        styles.dropArea
                                    ]}>
                                    <Text style={theme?.ThemeData.textStyle.labelMeduim}>Touch & hold a card then drag it</Text>
                                    <Text style={theme?.ThemeData.textStyle.labelMeduim}>to this box</Text>
                                </View>)}
                                content={(
                                    <View style={styles.cardContainer}>
                                        <DetailsCard image={constantImages.greenCard} />
                                    </View>
                                )} />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        pagingEnabled={true}
                    />


                </View>
                <CustomButton text='Play Now' onPress={() => { }} />
            </View>


        </View>
    )
}

export default AirPayScreen
const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        //backgroundColor: 'red',
    },
    cardContainer: {
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dropArea: {
        borderWidth: 2,
        zIndex: -1000,
        borderRadius: 27,
        width: Dimensions.get('window').width * 0.9, // Full width of the screen
        height: '100%',
        borderStyle: 'dashed',
    }



});


