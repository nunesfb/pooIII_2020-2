import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Camera from '../pages/Camera';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#750505',
      },
      cardStyle: {backgroundColor: '#750505'},
    }}
    // initialRouteName="SignIn"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Camera" component={Camera} />
  </Auth.Navigator>
);

export default AuthRoutes;
