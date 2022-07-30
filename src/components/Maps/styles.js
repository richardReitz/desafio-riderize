import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
position: relative;
`;

export const IconView = styled.View`
width: 100%;
align-items: flex-end;
bottom: 10px;
right: 20px;
position: absolute;
text-align: end;
`;

export const WrapIcon = styled.TouchableOpacity`
background-color: rgba(255,255,255, .9);
align-items: center;
justify-content: center;
height: 50px;
width: 50px;
border-radius: 25px;
margin-bottom: 10px;
`;