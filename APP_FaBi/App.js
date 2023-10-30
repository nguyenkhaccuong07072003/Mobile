import {View} from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Info from './Screen/Info/info';
import WelCome from './Screen/WelCome';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Notice from './Screen/Notice';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='WelCome' options={{headerShown:false}} component={WelCome} ></Stack.Screen>
        <Stack.Screen name='Login' options={{headerShown:false}} component={Login} ></Stack.Screen>
        <Stack.Screen name='Register' options={{headerShown:false}} component={Register} ></Stack.Screen>
        <Stack.Screen name='Info' options={{headerShown:false}} component={Info} ></Stack.Screen>  */}
        <Stack.Screen name='Notice' options={{headerShown:false}} component={Notice} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

