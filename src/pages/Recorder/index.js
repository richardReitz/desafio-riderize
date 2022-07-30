import React, {} from 'react';
import { 
    Container,
    Description,
    TextLocal,
    TextTimer,
    Timer,
    MetricView,
    MetricWrap,
    StatusTitle,
    Status,
    StopBtn,
    TextStopBtn
} from './styles';

import Header from '../../components/Header';
import Maps from '../../components/Maps';


export default function Recorder({route}) {
    return (
        <Container>
            <Header title="Pedalada"/>
            <Maps height={250}/>
            <Description>Você está pedalando em:</Description>
            <TextLocal>{route.params?.city}/{route.params?.state}</TextLocal>
            <TextTimer>tempo</TextTimer>
            <Timer>00:00:02</Timer>
            <MetricView>
                <MetricWrap>
                    <StatusTitle>distância</StatusTitle>
                    <Status>00:00:02</Status>
                </MetricWrap>
                <MetricWrap>
                    <StatusTitle>velocidade (km/h)</StatusTitle>
                    <Status>31.1</Status>
                </MetricWrap>
            </MetricView>
            <StopBtn>
                <TextStopBtn>Parar</TextStopBtn>
            </StopBtn>
        </Container>
    )
}