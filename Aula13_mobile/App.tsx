/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-use-before-define */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import AppProvider from './src/hooks';

import Routes from './src/routes/index';

// Estou criando um Function Component vazio e passo uma view
// Assim, a tela que vai ser mostrada é toda em branco
const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    try {
      SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    setTimeout(() => {
      prepareResources();
    }, 2500);
  }, []);

  const prepareResources = async () => {
    try {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    } catch (e) {
      console.warn(e);
    }
  };

  if (!appIsReady) {
    return (
      <View style={{flex: 1}}>
        <Image source={require('./src/assets/fundo.png')} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <AppProvider>
        <View style={{flex: 1, backgroundColor: '#750505'}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
