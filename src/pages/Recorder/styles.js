import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #FFF;
align-items: center;
`;

export const Description = styled.Text`
margin: 20px 0 5px;
font-size: 16px;
color: #000;
font-family: 'NeuzeitGro-Reg';
`;

export const TextLocal = styled.Text`
font-family: 'NeuzeitGro-Bol';
color: #000;
font-size: 16px;
`;

export const TextTimer = styled.Text`
font-size: 25px;
margin-top: 30px;
color: #000;
font-family: 'NeuzeitGro-Reg';
`;

export const Timer = styled.Text`
font-size: 68px;
color: #000;
font-family: 'NeuzeitGro-Bol';
margin: 10px 0 10px;
`;

export const MetricView = styled.View`
margin: 25px 0 35px;
width: 85%;
flex-direction: row;
justify-content: space-between;
`;

export const MetricWrap = styled.View`
align-items: center;
`;

export const StatusTitle = styled.Text`
font-size: 16px;
font-family: 'NeuzeitGro-Reg';
`;

export const Status = styled.Text`
font-size: 32px;
font-family: 'NeuzeitGro-Bol';
color: #000;
margin-top: 10px;
`;

export const StopBtn = styled.TouchableOpacity`
border: solid 1px #FF2525;
padding: 14px 25px;
width: 90%;
border-radius: 80px;
align-items: center;
`;

export const TextStopBtn = styled.Text`
color: #FF2525;
font-size: 16px;
font-family: 'NeuzeitGro-Reg';
`;