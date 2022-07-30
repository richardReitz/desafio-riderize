import React from 'react';
import { Container, IconWrap, Title } from './styles';
import { useNavigation } from '@react-navigation/native'

import FIcon from 'react-native-vector-icons/Feather';

export default function Header({title}) {
    const navigation = useNavigation();

    return (
        <Container>
            <IconWrap onPress={() => navigation.navigate('Inicio')}>
                <FIcon name="arrow-left" size={25} color="#000" />
            </IconWrap>
            <Title>{title}</Title>
            <IconWrap>
                <FIcon name="settings" size={22} color="#000" />
            </IconWrap>
        </Container>
    );
}