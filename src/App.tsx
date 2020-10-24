import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './routes/index';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#001C47" />
    <View style={{ flex: 1, backgroundColor: '#0082C9' }}>
      <Routers />
    </View>
  </NavigationContainer>
);

export default App;
