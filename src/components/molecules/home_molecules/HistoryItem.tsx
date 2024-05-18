import React, { useContext } from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import constantImages from '../../../core/constants/constant_images'
import Divider from '../../atoms/global_atoms/Divider'
import { ThemeContext } from '../../../App'

type HistoryItemProps = {
    image?: ImageSourcePropType | undefined,
    name: string,
    date: string,
    price: string
}
const HistoryItem = ({ image, name, price, date }: HistoryItemProps) => {
    const theme = useContext(ThemeContext);
    return (
        <View>
            <View style={styles.itemContainer}>
                <View style={styles.contentStyle}>

                    {image && <View style={[styles.imageContainer, { backgroundColor: theme?.ThemeData.inputStyles.primaryInputColors.backgroundColor }]}>
                        <Image source={image} />
                    </View>}

                    <View style={{ paddingLeft: '5%' }}>

                        <Text style={[
                            theme?.ThemeData.textStyle.bodyMeduim,
                            { color: theme?.ThemeData.colors.secondaryTextColor }
                        ]}>{name}</Text>

                        <Text style={[
                            theme?.ThemeData.textStyle.labelSmall,
                            { color: theme?.ThemeData.colors.inputTextColor }
                        ]}>{date}</Text>
                    </View>
                </View>
                <Text style={[theme?.ThemeData.textStyle.titleMeduim, { fontSize: 17 }]}>{price}</Text>
            </View>
            <Divider />
        </View>
    )
}

export default HistoryItem;
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});