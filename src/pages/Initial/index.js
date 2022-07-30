import React, {} from 'react';
import { Container, ViewIcon, Icon, StartBtn, TextStartBtn, WrapIcon, } from './styles';
import { useNavigation } from '@react-navigation/native';

import MIcon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Maps from '../../components/Maps';

export default function Initial() {
    const navigation = useNavigation();

    return (
        <Container>
            <Header title="Pedalada"/>
            <Maps height={520}/>
            <ViewIcon>
                <WrapIcon>
                    <Icon source={require('../../assets/images/route.png')}/>
                </WrapIcon>
                <WrapIcon>
                    <Icon source={require('../../assets/images/biking.png')}/>
                </WrapIcon>
                <WrapIcon>
                    <Icon source={require('../../assets/images/mountain.png')}/>
                </WrapIcon>
                <WrapIcon>
                    <Icon source={require('../../assets/images/monitor_weight.png')}/>
                </WrapIcon>
            </ViewIcon>
            <StartBtn onPress={() => navigation.navigate('Pedalada')}>
                <TextStartBtn>Iniciar Atividade</TextStartBtn>
                <MIcon name="arrow-forward" size={25} color="#FFF" />
            </StartBtn>
        </Container>
    )
}