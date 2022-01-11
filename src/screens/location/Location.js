import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { coordinatesPoligon, initialState } from '../../constants/mapsPoligon/coordinatesPoligon';
import { styles } from './styles';

export const Location = () => {

    const [currentPosition, setCurrentPosition] = useState(initialState);

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            setCurrentPosition({
                ...currentPosition,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 2000 }
        )
    }, [])

    return (
        <View style={styles.MainContainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                showsUserLocation={true}
                onRegionChangeComplete={(region) => setCurrentPosition(region)}
                zoomEnabled={true}
                zoomControlEnabled={true}
                initialRegion={{
                    latitude: currentPosition.latitude,
                    longitude: currentPosition.longitude,
                    latitudeDelta: 0.010,
                    longitudeDelta: 0.05,
                }}>

                <Polygon
                    coordinates={coordinatesPoligon.points}
                    fillColor={'rgba(0, 128, 0, 0.3)'}
                    strokeWidth={0.5}
                />

                <Marker
                    coordinate={{ latitude: 48.6853485, longitude: 32.3624038 }}
                    title={"Trepivska shkola"}
                    description={"Trepivska zagalnoosvitnya shkola"}
                />

            </MapView>
            <View style={styles.showPosition}>
                <Text style={styles.textPositionCoordinates}>latitude: {currentPosition.latitude} </Text>
                <Text style={styles.textPositionCoordinates}>longitude: {currentPosition.longitude}</Text>
            </View>
        </View>
    );
};