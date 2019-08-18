import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Header } from 'native-base';


export default class Whislist extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name={tintColor == '#0baa56' ? 'favorite' : 'favorite-border'} size={18} style={{color: tintColor}} />
      </View>
    )
  }

  render() {
    return(
      <Container>
        <Header>
          <Text>Whislist</Text>
        </Header>
      </Container>
    );
  }
}