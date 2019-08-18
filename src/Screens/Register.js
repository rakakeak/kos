import React, {Component} from 'react'
import { Container, Header, Left, Body, Button, Icon, Title, Content, View, Text, Form, Item, Input, Label, Radio } from 'native-base';

export default class Register extends Component {
    render() {
        return(
         <Container>
            <Header style={{backgroundColor:'black'}}>
                <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Welcome</Title>
                </Body>
            </Header>
            <Content>
            <View style={{backgroundColor:'mediumaquamarine', flex:1, justifyContent:'center', alignItems:'center'}}>
             <View style={{width:350, height: 520, borderWidth:1, borderRadius:50, backgroundColor:'white', alignContent:'center', marginVertical:'20%', justifyContent:'center'}}>
                 <View style={{paddingLeft: 40, paddingBottom: 6, paddingTop:60, alignItems:'flex-start'}}>
                   <Text style={{fontWeight:'bold'}}>
                       Daftar
                   </Text>
                 </View>

                 <View>
                 <Form>
                    <Item floatingLabel>
                      <Label>NAMA</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel>
                     <Label>NOMOR HANDPHONE</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel>
                      <Label>EMAIL</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel>
                     <Label>PASSWORD</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel>
                      <Label>KOTA</Label>
                    <Input />
                    </Item>
                </Form>
                 </View>

                 <View style={{flexDirection:'row', marginHorizontal: 10, paddingTop:12}}>
                 <Radio
                    color={"#f0ad4e"}
                     selectedColor={"#5cb85c"}
                     selected={true}
                 />
                 <Text style={{marginLeft:4}}>Subscribe newsletter</Text>
                 </View>

                 <View style={{marginHorizontal:10, paddingTop:6}}>
                     <Text style={{fontSize:10}}>Dengan menekan tombol dibawah, anda telah menyeyujui kebijakan Privacy dan Syarat & Ketentuan Mister Kos</Text>
                 </View>
                 <View style={{marginHorizontal:10, paddingTop:12}}>
                 <Button style={{borderRadius:16}} full success>
                   <Text>DAFTAR</Text>
                </Button>
                 </View>


             </View>
            </View>
            </Content>
         </Container>

        )
    }
}