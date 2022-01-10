import React from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import { styles } from './styles';
import { coordinatesPoligon } from '../../constants/mapsPoligon/coordinatesPoligon';


export const Location = () => {

    return (
        <View style={styles.MainContainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                zoomEnabled={true}
                zoomControlEnabled={true}
                initialRegion={{
                    latitude: 48.6870872,
                    longitude: 32.3491104,
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
        </View>
    );
};