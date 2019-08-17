import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text, Left, Button, Icon,Body, Title, View, List, ListItem, Thumbnail, Right } from 'native-base';

import DateComponent from '../Component/date'
import { TouchableOpacity, } from 'react-native';

export default class DatePickerExample extends Component {
  render() {
    return (
      <Container>
          <Header style={{backgroundColor:'green', alignItems:'center'}}>
            <TouchableOpacity onPress={() => alert('asd')}>

            <Icon name='arrow-back' />
            </TouchableOpacity>
          <Body style={{ alignItems:'center'}}>
             
            <Title>Header</Title>
          </Body>
          </Header>
          <Content style={{padding:12}}>
            <View>
                <DateComponent />
                
            </View>
            <View style={{borderTopWidth:0.5, borderBottomWidth:0.5}}>
            <List>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square source={{ uri:'https://www.finansialku.com/wp-content/uploads/2017/10/Tips-Membangun-Rumah-Kost-Yang-Menguntungkan-01-Finansialku.jpg' }}  />
              </Left>
              <Body>
                <Text style={{fontWeight:'bold'}}>Kost Mami Room Yogyakarta</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                <Text style={{fontWeight:'bold'}}>Rp. 1.750.000</Text>
              </Body>
              </ListItem>
              </List>
            </View>

            <View style={{borderBottomWidth:0.5}}>
            <View style={{marginVertical:12, flexDirection:'row'}}>
                <View >
                <Text style={{fontWeight:'bold'}}>Data Penghuni </Text>
                </View>
                <Right>
                <Text style={{fontWeight:'bold' ,color:'red'}}>Ubah</Text>
                </Right> 
            </View>

            <View style={{marginVertical:12, flexDirection:'row'}}>
                <View >
                <Text >Nama Lengkap </Text>
                </View>
                <Right>
                <Text style={{fontWeight:'bold' ,color:'red'}}>Ubah</Text>
                </Right> 
            </View>

            <View style={{marginVertical:12, flexDirection:'row'}}>
                <View >
                <Text >Jenis Kelamin </Text>
                </View>
                <Right>
                <Text style={{fontWeight:'bold' ,color:'red'}}>Ubah</Text>
                </Right> 
            </View>

            <View style={{marginVertical:12, flexDirection:'row'}}>
                <View >
                <Text >No Handphone </Text>
                </View>
                <Right>
                <Text style={{fontWeight:'bold' ,color:'red'}}>Ubah</Text>
                </Right> 
            </View>

            <View style={{marginVertical:12, flexDirection:'row'}}>
                <View >
                <Text >Pekerjaan </Text>
                </View>
                <Right>
                <Text style={{fontWeight:'bold' ,color:'red'}}>Ubah</Text>
                </Right> 
            </View>

            </View>

          </Content>

        </Container>
    );
  }
}