import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Chat extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name={tintColor == '#0baa56' ? 'favorite' : 'favorite-border'} size={18} style={{color: tintColor}} />
      </View>
    )
  }

  render() {
    return(
      <View>
        <Text>Chat</Text>
      </View>
    );
  }
}