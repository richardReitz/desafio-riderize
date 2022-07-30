import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #FFF;
align-items: center;
`;

export const ViewIcon = styled.View`
padding: 15px 0 28px;
width: 100%;
flex-direction: row;
justify-content: space-around;
`;

export const WrapIcon = styled.TouchableOpacity`
`;

export const Icon = styled.Image`
height: 25px;
width: 25px;
`;

export const StartBtn = styled.TouchableOpacity`
background-color: #0564FF;
padding: 14px 25px;
width: 90%;
border-radius: 80px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const TextStartBtn = styled.Text`
color: #FFF;
font-size: 16px;
font-family: 'NeuzeitGro-Reg';
`;
