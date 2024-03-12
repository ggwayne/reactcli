import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import Homepage from '../screens/Homepage';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/Forgotpassword';
import ChangePassword from '../screens/Changepassword'
import ConfirmPassword from '../screens/Confirmpassword';
import Levels from '../screens/Levels';
import Control from '../screens/Control';
import Updates from '../screens/Updates';
import Profile from '../screens/Profile';
import EditProfile from '../screens/Editprofile';
import { Text } from 'react-native';



const Stack = createNativeStackNavigator();

const Rootstack = () => {
  return (
    <Text> teashda</Text>
    // <NavigationContainer>
    // {
    //   <Stack.Navigator screenOptions={{
    //     headerStyle:{
    //       backgroundColor: 'transparent'
    //     },
    //     headerTransparent: true,
    //     headerTitle: '', 
    //     headerLeftContainerStyle: {
    //       paddingLeft: 20
    //     }
    // }} initialRouteName='Homepage'>
        
    //   <Stack.Screen name="Homepage" component={Homepage} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="Login" component={Login} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="Register" component={Register} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ScreenLevels" component={Levels} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ScreenControl" component={Control} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ScreenUpdates" component={Updates} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="ScreenProfile" component={Profile} options={{headerTitleAlign : 'center'}}/>
    //   <Stack.Screen name="EditProfile" component={EditProfile} options={{headerTitleAlign : 'center'}}/>

    //   </Stack.Navigator>
    // }
    // </NavigationContainer>
  );
};

export default Rootstack;