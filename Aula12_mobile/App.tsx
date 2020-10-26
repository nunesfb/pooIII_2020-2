import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './src/hooks';

import Routes from './src/routes/index';

// Estou criando um Function Component vazio e passo uma view
// Assim, a tela que vai ser mostrada é toda em branco
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <AppProvider>
      <View style={{flex: 1, backgroundColor: '#750505'}}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
