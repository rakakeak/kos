
import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, Form, Item, Input, Label, View , Button, Text} from 'native-base';




export default class Login extends Component {
  render() {
    return (

      <Container >
        <Header style={{justifyContent:'center', alignItems:'center', backgroundColor:'white', marginTop:40, elevation:0}}>
          
        <Image source={require('../Assets/Images/logo_mamikos_green.png')} style={{width: '80%', resizeMode:'contain', backgroundColor: 'white', height: 100 }}/>
        </Header>
        
        <View style style={{justifyContent: 'center', alignItems:'center',backgroundColor:'white', flex: 1}}>

       <View style={{backgroundColor: 'white', width : 350, height: 400, borderRadius: 40, alignItems:'center', borderWidth: 2}}>
        <View style={{flex:1}}>
          <Form style={{flex:1,  justifyContent:'center', marginHorizontal:20, marginRight: 30}}>

            <Item floatingLabel style={{paddingTop:10, borderBottomColor:'#0baa56' }} >
              <Label >Username</Label>
              <Input />
            </Item>
          
            <Item floatingLabel style={{paddingTop:10, marginTop: 16, borderBottomColor:'#0baa56'}} >
              <Label >Password</Label>
              <Input/>
            </Item>
            <View style={{flexDirection: "row", paddingTop:10, marginLeft:14}}>
              <Text style={{fontSize: 14}}>Belum Punya Akun? </Text>
              <Text onPress={() => alert('kuy daftar')} style={{color: 'green', fontSize: 14, textDecorationLine:'underline', marginLeft:4}}>Daftar Sekarang</Text>
            </View>

            <Button full success style={{marginTop: 30, marginLeft: 10, borderRadius: 20, width: '100%', marginRight:10}}>
            <Text>Login</Text>
          </Button>
          </Form>

          
          
        </View>
       </View>
        </View>
      </Container>
    );
  }
}