import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './../screens/Homepage';
import Login from './../screens/Login';


const Stack = createStackNavigator();

const Rootstack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen name="Homepage" component={Homepage} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign : 'center'}}/>
     
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootstack;