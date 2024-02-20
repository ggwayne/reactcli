import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import Homepage from '../screens/Homepage';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/Forgotpassword';
import ConfirmPassword from '../screens/Confirmpassword';
import ChangeYourPassword from '../screens/Changepassword'; 


const Stack = createNativeStackNavigator();

const Rootstack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Homepage">
        
      <Stack.Screen name="Homepage" component={Homepage} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign : 'center'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootstack;
