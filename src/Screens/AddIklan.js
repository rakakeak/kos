import React, { Component } from "react";
import {StyleSheet, View} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title, Form, Item, Input, Label, Content, Text} from 'native-base'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';



export default class AddIklan extends Component {
        state = {
            keyword: '',
          };
    
    
      updateSearch = keyword => {
        this.setState({
            keyword
        });
      };
    

    render() {
        const { keyword } = this.state;
        return(
            
            <Container>
        <Header>
            
          <Left>
            <Button transparent>
              <Icon name='arrow-back' size={26} />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content style={{paddingLeft:4 ,paddingRight: 20}}>

          <Form>
            <Item stackedLabel>
              <Label>Nama Kost</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Alamat Kost</Label>
              <Input />
            </Item>
          </Form>
          <Text style={{paddingLeft: 14, paddingTop:4, fontSize:14}}>Seach alamat/area kost anda di Peta, kemudian pindahkan pin di peta ke lokasi tepat kost anda</Text>
          <SearchBar 
          placeholder="Cari kos disini"
          onChangeText={this.updateSearch}
          value={keyword}
          lightTheme={true}
          containerStyle={{padding:0, marginTop: 8, marginBottom:8 ,marginHorizontal:6, marginLeft:14, backgroundColor:'black', borderRadius: 10 }}
          inputContainerStyle={{backgroundColor:"white", borderRadius: 10,margin:1}}
         />

         <Form>
            <Item stackedLabel>
              <Label>Pemilik Kost</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Nomor handphone Pemilik Kost</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Pengelola Kost</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>No. Hp Pengelola Kost</Label>
              <Input />
            </Item>
          </Form>
          

        </Content>
       

      </Container>
        );
    }
}