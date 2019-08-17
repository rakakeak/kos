import React, {Component} from 'React'
import {Image, View} from 'react-native'
import { Container, Header, Item, Input, Button, Text, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, TabHeading, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { SearchBar } from 'react-native-elements';

export default class ListKost extends Component {
    render() {
        return (
          <Container>
            <Header hasTabs searchBar rounded style={{backgroundColor:'white', elevation:0}}>
              <Item style = {{borderRadius:10, backgroundColor:'#dcdcdc'}}>
                <Icon name="search" size={26} />
                <Input placeholder="Search" />
                <Icon name="filter-list" size={26} />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
            <Tabs renderTabBar={()=> <ScrollableTab  style={{backgroundColor:'white'} } />} >
            <Tab heading="Lihat Peta" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'green', fontWeight: 'normal'}}>
                <Text>Lihat Peta</Text>
                </Tab>
                <Tab heading="Pilih Kost" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: 'green', fontWeight: 'normal'}}>
                    {/* -----------------------------isi konten----------------------- */}
                <Content>
                <Card style={{padding: 4, backgroundColor:'white'}}>
                    <CardItem cardBody style={{backgroundColor:'white'}}>
                    <Image borderRadius={30} source={require('../Assets/Images/kosmedan1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                    <View style={{ width: '85%', backgroundColor: 'white', borderRadius:12, paddingLeft:6, marginTop: -40, marginLeft:-10}}>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Text style={{ flex: 1}}>Putri</Text>
                        <Text style={{ flex: 1}}>1 Kamar</Text>
                        <Text style={{ flex: 1}}>Medan Denai</Text>
                    </View>
                    <View style={{paddingTop:4, paddingLeft: 0}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Rp. 1.500.000 / Bulan </Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <Text style={{fontSize:14}}>Kos dengan nuansa adam dan dingin dengan fasilitas yang sangat lengkap. Dengan kamar mandi dalam, listrik dan air gratis</Text>
                    </View>
                    <Button rounded success style={{width:96, height: 40, marginTop:8}}>
                        <Text>Booking</Text>
                    </Button>
                    </View>
                    

                    </CardItem>
                </Card>

                <Card style={{padding: 4, backgroundColor:'white'}}>
                    <CardItem cardBody style={{backgroundColor:'white'}}>
                    <Image borderRadius={30} source={require('../Assets/Images/kosmedan1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                    <View style={{ width: '85%', backgroundColor: 'white', borderRadius:12, paddingLeft:6, marginTop: -40, marginLeft:-10}}>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Text style={{ flex: 1}}>Putri</Text>
                        <Text style={{ flex: 1}}>1 Kamar</Text>
                        <Text style={{ flex: 1}}>Medan Denai</Text>
                    </View>
                    <View style={{paddingTop:4, paddingLeft: 0}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Rp. 1.500.000 / Bulan </Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <Text style={{fontSize:14}}>Kos dengan nuansa adam dan dingin dengan fasilitas yang sangat lengkap. Dengan kamar mandi dalam, listrik dan air gratis</Text>
                    </View>
                    <Button rounded success style={{width:96, height: 40, marginTop:8}}>
                        <Text>Booking</Text>
                    </Button>
                    </View>
                    

                    </CardItem>
                </Card>

                <Card style={{padding: 4, backgroundColor:'white'}}>
                    <CardItem cardBody style={{backgroundColor:'white'}}>
                    <Image borderRadius={30} source={require('../Assets/Images/kosmedan1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                    <View style={{ width: '85%', backgroundColor: 'white', borderRadius:12, paddingLeft:6, marginTop: -40, marginLeft:-10}}>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Text style={{ flex: 1}}>Putri</Text>
                        <Text style={{ flex: 1}}>1 Kamar</Text>
                        <Text style={{ flex: 1}}>Medan Denai</Text>
                    </View>
                    <View style={{paddingTop:4, paddingLeft: 0}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Rp. 1.500.000 / Bulan </Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <Text style={{fontSize:14}}>Kos dengan nuansa adam dan dingin dengan fasilitas yang sangat lengkap. Dengan kamar mandi dalam, listrik dan air gratis</Text>
                    </View>
                    <Button rounded success style={{width:96, height: 40, marginTop:8}}>
                        <Text>Booking</Text>
                    </Button>
                    </View>
                    

                    </CardItem>
                </Card>

                </Content>
               </Tab>
            </Tabs>

            

          </Container>
        );
      }
    }