import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, PanResponderGestureState, Image, StyleSheet, Text, View } from 'react-native'
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
import FingerPrint from '../../components/atoms/login_atoms/FingerPrint';



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


type dataItemType = {
    id: number;
    image: any; // Use appropriate type for image if you know it, e.g., ImageSourcePropType
};



const AirPayScreen = () => {
    const navigation = useNavigation<any>();
    const theme = useContext(ThemeContext);
    const data = [
        { id: 1, image: constantImages.greenCard, accountNumber: '6506', balance: '$125,381.15' },
        { id: 2, image: constantImages.redCard, accountNumber: '8524', balance: '$123,666.80' },
        { id: 3, image: constantImages.greenCard, accountNumber: '9512', balance: '$11,156.80' }
    ];

    const dropAreaLayoutRef = useRef<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, height: 0, width: 0 });
    const [currentCardIndex, setCurrentCardIndex] = useState<number | undefined>();
    //const [selectedItem, setSelectedItem] = useState<dataItemType | undefined>();

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
            // console.log('ker');

            // setSelectedItem({ id: data[currentCardIndex].id, image: data[currentCardIndex].image })
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
                            return (
                                <DragableComponent
                                    index={index}
                                    setCurrentIndex={setCurrentCardIndex}
                                    dropAreaPosition={dropAreaLayoutRef}
                                    onDrop={handleDrop}
                                    content={(
                                        <View style={styles.cardContainer}>
                                            <DetailsCard
                                                accountNumber={item.accountNumber}
                                                balance={item.balance}
                                                image={item.image}
                                            />
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
                        {currentCardIndex === undefined ?
                            <View>
                                <Text style={theme?.ThemeData.textStyle.labelMeduim}>Touch & hold a card then drag it</Text>
                                <Text style={theme?.ThemeData.textStyle.labelMeduim}>to this box</Text>
                            </View> :
                            <View style={[styles.cardContainer, { marginTop: '7%' }]}>
                                <DetailsCard
                                    accountNumber={data[currentCardIndex].accountNumber}
                                    balance={data[currentCardIndex].balance}
                                    image={data[currentCardIndex].image}
                                />
                            </View>
                        }

                    </View>
                </View>
                <CustomButton
                    style={{marginTop: '5%', }}
                    text='Play Now'
                    suffix={(<Image style={{ width: 32, height: 32 }} source={constantImages.meduimFingerIcon} />)}
                    onPress={() => { }} />
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


