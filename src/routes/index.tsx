import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Counters from '../pages/Counters';
import Config from '../pages/Config';

const Router = createBottomTabNavigator();

const routers = () => (
  <Router.Navigator
    tabBarOptions={{
      activeTintColor: '#FF9500',
      labelStyle: { fontSize: 14 },
      tabStyle: { backgroundColor: '#001C47', borderColor: '#001C47' },
    }}
  >
    <Router.Screen
      name="Counters"
      component={Counters}
      options={{
        tabBarIcon: ({ color }) => <Icon name="star" color={color} size={22} />,
      }}
    />
    <Router.Screen
      name="Config"
      component={Config}
      options={{
        tabBarIcon: ({ color }) => <Icon name="star" color={color} size={22} />,
      }}
    />
  </Router.Navigator>
);

export default routers;
