import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const ATMsScreen = () => {
  const markers = [
    {
        id: 1,
        title: 'Cairo',
        description: 'This is the capital of Egypt',
        coordinate: {
            latitude: 30.0444,
            longitude: 31.2357,
        },
    },
    {
        id: 2,
        title: 'Hurghada',
        description: 'This is a description for Hurghada',
        coordinate: {
            latitude: 27.2579,
            longitude: 33.8116,
        },
    },
    {
        id: 3,
        title: 'Alexandria',
        description: 'This is a description for Alexandria',
        coordinate: {
            latitude: 31.2156,
            longitude: 29.9553,
        },
    },
];


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.0444,
          longitude: 31.2357,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>

  )
}

export default ATMsScreen
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});