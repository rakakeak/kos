
import React, { Component } from 'react';
import {Image} from 'react-native';
import {
  Container,
  View,
  Button,
  Item,
  Form,
  Input,
  Text,
} from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import App from '../../App'


class Login extends Component {


  render() {
    return (
      <Container style={{ position: 'relative' }}>
        <View style={{ position: 'absolute', width: 140, height: 140, backgroundColor: '#0baa56', top: 0, right: 0, zIndex: 99, borderBottomLeftRadius: 140 }} />

        <View style={{ flex: 1 }}>
          <Image source={require('../Assets/logo_mamikos_green.png')} style={{ width: 180, height: 100, resizeMode: 'contain', position: 'absolute', bottom: -16, left: 28 }} />
        </View>

        <View style={{ flex: 3, alignItems: 'center', zIndex: 99 }}>
          <Form style={{ flex: 1, marginTop: 40}}>
            <Item style={{ paddingTop: 10, borderBottomColor: '#0baa56', marginLeft: 0 }} >
              <Icon name='person' size={18} color='gray'/>
              {/* <Label style={{color: 'gray'}}>Username</Label> */}
              <Input placeholder='Username' placeholderTextColor='gray'/>
            </Item>

            <Item style={{ paddingTop: 10, marginTop: 16, borderBottomColor: '#0baa56', marginLeft: 0 }} >
              <Icon name='lock' size={18} color='gray'/>
              <Input placeholder='Password' placeholderTextColor='gray'/>
            </Item>

            <Button full success style={{ marginTop: 24, borderRadius: 50, backgroundColor: '#0baa56'}} onPress={() => this.props.navigation.navigate('App')}>
              <Text>Login</Text>
            </Button>

            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Text style={{ fontSize: 14 }}>Belum Punya Akun? </Text>
              <Text onPress={() => alert('daftar skuy')} style={{ color: '#0baa56', fontSize: 14, textDecorationLine: 'underline', marginLeft: 4 }}>Daftar Sekarang</Text>
            </View>
          </Form>
        </View>

        <View style={{ position: 'absolute', width: 100, height: 100, backgroundColor: '#0baa56', bottom: 0, left: 0, borderTopRightRadius: 100 }} />
        <View style={{ position: 'absolute', width: 60, height: 120, backgroundColor: '#0baa56', bottom: 20, right: 0, borderTopLeftRadius: 120, borderBottomLeftRadius: 120 }} />
      </Container>
    );
  }
}

const StackNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    App: {
      screen: App
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(StackNavigator);
