import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../../App';

type CheckBoxProp = {
    label: string | undefined;
    isSelect: boolean;
    setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckBox = ({ label, isSelect, setIsSelect }: CheckBoxProp) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.BoxStyle}
                onPress={() => setIsSelect(!isSelect)}
            >
                {isSelect ? (<Icon size={15} color='#B7B7B7' name='check' />) : (<></>)}
            </TouchableOpacity>
            <Text style={[theme?.ThemeData.textStyle.labelSmall,{paddingHorizontal: '5%'}]}>{label}</Text>
        </View>
    )
}

export default CheckBox
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    BoxStyle: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 6.25,
        width: 25,
        height: 25
    },
    
});
