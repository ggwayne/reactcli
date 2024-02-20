import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Homepage from './src/screens/Homepage';
import ForgotPassword from './src/screens/Forgotpassword';
import Changepassword from './src/screens/Changepassword';
import Confirmpassword from './src/screens/Confirmpassword';
import Editprofile from './src/screens/Editprofile';
import Control from './src/screens/Control';
import Levels from './src/screens/Levels';
import Profile from './src/screens/Profile';
import Updates from './src/screens/Updates';

const App = () => {
  return (
    <NavigationContainer>
      <Control/>
      
    </NavigationContainer>
  );
};

export default App;
