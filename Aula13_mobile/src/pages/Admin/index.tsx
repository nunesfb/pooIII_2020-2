import React from 'react';
import {View, Button, Text} from 'react-native';

import {useAuth} from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <View>
      <Text>PAINEL DO ADMIN</Text>
      <Button title="sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
