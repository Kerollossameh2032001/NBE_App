import AsyncStorage from '@react-native-async-storage/async-storage';


export const setData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting dark mode', error);
    }
};

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? JSON.parse(value) : -1;
    } catch (error) {
        console.error('Error getting dark mode', error);
        return false;
    }
};
