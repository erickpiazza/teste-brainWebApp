import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routers from './routes/index';
import store from './store/store';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#001C47" />
      <View style={{ flex: 1 }}>
        <Routers />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
