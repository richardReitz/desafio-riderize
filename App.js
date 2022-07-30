import React from 'react';
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Initial from './src/pages/Initial';
import Recorder from './src/pages/Recorder';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar backgroundColor="#FFF" barStyle='dark-content'/>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Inicio" component={Initial} />
            <Stack.Screen options={{headerShown:false}} name="Pedalada" component={Recorder} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
