
import React, { Component } from 'react';
import { View } from 'react-native';  
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

// Screens

import Home from './src/Screens/Home'
import WhislistScreen from './src/Screens/Whislist'
import ChatScreen from './src/Screens/Chat'
import ProfileScreen from './src/Screens/Profile'

// import LoginScreen from './src/Screens/Login'
// import IklanScreen from './src/Screens/AddIklan'
// import KostScreen from './src/Screens/ListKost'
// import DetailScreen from './src/Screens/DetailKost'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name='search' size={18} style={{color: tintColor}} />
          </View>
        )
      }
    },
    Whislist: { screen: WhislistScreen },
    Chat: { screen: ChatScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#0baa56',
      style: {
        paddingTop: 12,
        paddingBottom: 8
      },
    },
  }
);

export default createAppContainer(TabNavigator);