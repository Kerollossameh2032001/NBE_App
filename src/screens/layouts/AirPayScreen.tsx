import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, LayoutChangeEvent, PanResponder, PanResponderGestureState, ScrollView, StyleSheet, Text, View } from 'react-native'
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
    const [data, setData] = useState([
        { id: 1, image: constantImages.greenCard },
        { id: 2, image: constantImages.redCard },
        { id: 3, image: constantImages.greenCard }
    ]);

    const dropAreaLayoutRef = useRef<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, height: 0, width: 0 });
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const handleDrop = (gesture: PanResponderGestureState) => {
        if (!dropAreaLayoutRef) return false;

        const { moveX, moveY } = gesture;
        const { x, y, width, height } = dropAreaLayoutRef.current;

        if (
            moveX >= x &&
            moveX <= x + width &&
            moveY >= y &&
            moveY <= y + height
        ) {
            //setData(prevData => prevData.filter((_, i) => i !== currentCardIndex));
            return true;
        }
        return false;
    };


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
                        renderItem={({ item, index }) => {
                            setCurrentCardIndex(index);
                            return (
                                <DragableComponent
                                    dropAreaPosition={dropAreaLayoutRef}
                                    onDrop={handleDrop}
                                    content={(
                                        <View style={styles.cardContainer}>
                                            <DetailsCard image={item.image} />
                                        </View>
                                    )} />
                            );
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        pagingEnabled={true}
                    />
                    <View
                        onLayout={(event) => {
                            const { width, x, y, height } = event.nativeEvent.layout
                            dropAreaLayoutRef.current = { x, y, width, height };
                        }}
                        style={[
                            styles.cardContainer,
                            { borderColor: theme?.ThemeData.colors.primary },
                            styles.dropArea
                        ]}>
                        <Text style={theme?.ThemeData.textStyle.labelMeduim}>Touch & hold a card then drag it</Text>
                        <Text style={theme?.ThemeData.textStyle.labelMeduim}>to this box</Text>
                    </View>
                </View>
                <CustomButton style={{ marginTop: '5%' }} text='Play Now' onPress={() => { }} />
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
        position: 'absolute',
        bottom: '3%',
        borderWidth: 2,
        zIndex: -1,
        borderRadius: 27,
        width: Dimensions.get('window').width * 0.9, // Full width of the screen
        height: '45%',
        borderStyle: 'dashed',
    }



});


