
// router.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import Dumpster from './dumpster';

const Router = createStackNavigator({
  Home: { screen: Home },
  Dumpster: { screen: Dumpster },
});

export default createAppContainer(Router);