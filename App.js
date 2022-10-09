import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Vehicle from './screens/Vehicle';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/Register';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleFlatList from './screens/VehicleFlatList';
import UpdateDeleteVehicle from './screens/UpdateDeleteVehicle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="vehicle" component={Vehicle} />
      <Stack.Screen name="vehicleFlatList" component={VehicleFlatList} />
      <Stack.Screen name="updateDeleteVehicle" component={UpdateDeleteVehicle} />
     
     
    </Stack.Navigator>
    </NavigationContainer>
  )
}