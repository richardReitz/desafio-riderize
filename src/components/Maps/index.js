import React, { useEffect, useState } from 'react';
import { Container, IconView, WrapIcon, } from './styles';
import { useNavigation } from '@react-navigation/native';

import MIcon from 'react-native-vector-icons/MaterialIcons';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';


export default function Maps(props) {
    const navigation = useNavigation();

    const [region, setRegion] = useState(null);

    useEffect(() => {
        getMyLocation();
    }, []);

    function getMyLocation() {
        Geolocation.getCurrentPosition(info => {

            const latitude = info.coords.latitude;
            const longitude = info.coords.longitude;

            setRegion({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            
            getAddress(latitude, longitude);
        }, 
        (err) => {console.log(err)}, {
            enableHighAccuracy:true,
            timeout:2000,
        }) 
    }
    
    function getAddress(lat, lng){
        Geocoder.init("AIzaSyAZtNwZu0twugmv3URrdQkivWIqjk-VGQE", {language: "pt-br"});

        Geocoder.from(lat, lng)
            .then(json => {
                let addressCity = json.results[6].address_components[0].long_name;
                let addressState = json.results[8].address_components[0].short_name;

                navigation.setParams({city: addressCity, state: addressState});
                
            })
            .catch(err => console.log('ERRO: ', err));           
        }
        

    return (
        <Container>
            <MapView
                region={region}
                style={{width:'100%', height:props.height}}
                minZoomLevel={17}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={false}
            />
            <IconView>
                <WrapIcon>
                    <MIcon name="layers" size={25} color="#000" />
                </WrapIcon>
                <WrapIcon>
                    <MIcon name="my-location" size={25} color="#000" />
                </WrapIcon>
            </IconView>
        </Container>
    );
}