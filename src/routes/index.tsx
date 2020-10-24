import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counters from '../pages/Counters';
import Config from '../pages/Config';

const Router = createBottomTabNavigator();

const routers = () => (
  <Router.Navigator>
    <Router.Screen name="Counters" component={Counters} />
    <Router.Screen name="Config" component={Config} />
  </Router.Navigator>
);

export default routers;
