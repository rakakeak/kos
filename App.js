
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container} from 'native-base';

import LoginScreen from './src/Screens/Login'
import IklanScreen from './src/Screens/AddIklan'
import KostScreen from './src/Screens/ListKost'
import DetailScreen from './src/Screens/DetailKost'

export default class App extends Component {
  render() {
    return (
        
       <DetailScreen/>
      // <KostScreen />
      // <LoginScreen />
      
  );
}
}