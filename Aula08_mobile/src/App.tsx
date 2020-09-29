import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

// Estou criando um Function Component vazio e passo uma view
// Assim, a tela que vai ser mostrada é toda em branco
const App: React.FC = () => (
  // contem as informacoes de contexto da navegacao
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#1C1C1C" />
    <View style={{flex: 1, backgroundColor: '#591109'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
