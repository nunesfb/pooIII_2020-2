import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#FFF',
      /* headerStyle: {
        backgroundColor: '#708090',
      }, */
      cardStyle: {backgroundColor: '#591109'},
    }}
    // initialRouteName="CreateUser"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="CreateUser" component={CreateUser} />
  </Auth.Navigator>
);

export default AuthRoutes;
