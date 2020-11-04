import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Admin from '../pages/Admin';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#312e38',
      },
      cardStyle: {backgroundColor: '#312e38'},
    }}
    // initialRouteName="SignIn"
  >
    <App.Screen name="Admin" component={Admin} />
  </App.Navigator>
);

export default AppRoutes;
