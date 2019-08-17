
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container} from 'native-base';

import LoginScreen from './src/Screens/Login'
import IklanScreen from './src/Screens/AddIklan'
import KostScreen from './src/Screens/ListKost'
import DetailScreen from './src/Screens/DetailKost'
import BookingScreen from './src/Screens/Booking'

import MapView from 'react-native-maps';
import AddIklan from './src/Screens/AddIklan';

export default class App extends Component {
  render() {
    return (
      // <AddIklan />
      
        <BookingScreen/>
      //  <DetailScreen/>
      // <KostScreen />
      // <LoginScreen />
        
    );
  }
}

