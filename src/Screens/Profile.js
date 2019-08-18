import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name={tintColor == '#0baa56' ? 'person' : 'person-outline'} size={18} style={{color: tintColor}} />
        </View>
      )
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
        </View>
      );
    }
  }