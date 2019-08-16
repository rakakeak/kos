import React, { Component } from 'react';
import {Image, ScrollView, Dimensions, Animated} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button,  View, Text, Item} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const photos = [
    require('../Assets/Images/kosmedan1.jpg'),
    require('../Assets/Images/kosmedan2.jpg'), 
    require('../Assets/Images/kosmedan1.jpg'),
    require('../Assets/Images/kosmedan2.jpg'),
    require('../Assets/Images/kosmedan1.jpg'),
  ];
  
export default class DetailKost extends Component {
    
  render() {
    return (
      <Container>
        <Content>
            <ScrollView
                horizontal={true}
                pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
                showsHorizontalScrollIndicator={false}
                >
                {photos.map((source, i) => { // for every object in the photos array...
                    return ( // ... we will return a square Image with the corresponding object as the source
                    <Image
                        key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                        style={{ width, height: 240 }}
                        source={source}
                    />
                    );
                })}
            </ScrollView>
            <View style={{height:45, backgroundColor:'black'}}>

            </View>
            <View style={{paddingHorizontal: 12}}>
                {/* ------------Judul Kost------------- */}
                <View style={{flexDirection:'row', marginTop: 8}}>
                    <Text style={{color: 'purple', fontWeight:'bold'}}>Putri</Text>
                    <Text style={{color: 'red', fontWeight:'bold', paddingHorizontal:10}}>Tinggal 1 Kamar</Text>
                </View>
                <View style={{marginTop: 8,  flexDirection:'row' }}>
                    <View style={{flex:1}}>
                      <Text style={{fontWeight:'bold', fontSize:16}}>Kost MamiRooms Bogor AGM Indraprasta Tipe D</Text>
                    </View>
                    <View style={{justifyContent:'flex-end', width: 80}}>
                        <Icon name='stars' size={50} />
                    </View>
                </View>

                
                <View style={{flexDirection:'row', paddingVertical:12, borderTopWidth:0.5, borderBottomWidth:0.5, marginVertical:10}}>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}><Icon name='power' size={16}/><Text>Tidak termasuk listrik</Text></View>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}><Icon name='money-off' size={16}/><Text>Tidak ada min. bayar</Text></View>
                </View>

                <View>
                    <Text style={{fontWeight:'bold', fontSize: 14, marginVertical:8}}>Luas Kamar</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Icon name='zoom-out-map' size={36} color='green' /><Text style={{marginLeft:10}}>3 x 3 meter</Text>
                    </View>
                       
                     <View >
                        <Text style={{fontWeight:'bold', fontSize: 14, marginVertical:18}}>Fasilitas kost dan kamar</Text>
                     </View>
                     <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                              <Icon name='airline-seat-individual-suite' size={25}/><Text>Kasur</Text>
                            </View>
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                              <Icon name='wifi' size={25} color='green'/><Text>Wifi - Internet</Text>
                            </View>
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                                <Icon name='hot-tub' size={25}/><Text>Kamar Mandi</Text>
                            </View>
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                                <Icon name='kitchen' size={25}/><Text>Dapur</Text>
                            </View>
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                                <Icon name='airline-seat-individual-suite' size={25}/><Text>Kasur</Text>
                            </View >
                            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:12}}>
                                <Icon name='wifi' size={25} color='green'/><Text>Wifi - Internet</Text>
                            </View>                                              
                        </View>
                    </ScrollView>

                    <View >
                        <Text style={{fontWeight:'bold', fontSize: 14, marginVertical:18}}>Deskripsi Kost</Text>
                    </View>
                    <View >
                        <Text style={{fontWeight:'bold', fontSize: 14}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                    </View>

                </View>
                
            </View>

            <View style={{paddingHorizontal: 12}}>  
               <View >
                   <Text style={{fontWeight:'bold', fontSize: 14, marginVertical:18}}>Kost Menarik Lainnya</Text>
               </View>
               <View >
                 <Image source={require('../Assets/Images/kosmedan2.jpg')} style={{width:100, height:100}} />
               </View>
            </View>

        </Content>

        <Footer >
          <FooterTab style={{backgroundColor:'white', alignItems:'center'}}>
            <View style={{paddingLeft:6}}>
                <Text style={{fontWeight:'bold'}}> Rp. 1.500.000 / bulan  </Text>
                <Text> Lihat semua harga </Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'flex-end', paddingHorizontal: 6}}>
                <Button style={{marginRight:8, backgroundColor:'white', borderColor:'green' , borderRadius:6, width: 96, borderWidth:1,}}><Text style={{color:'black', textAlign:'center'}}>Hubungi Kost</Text></Button>
                <Button style={{backgroundColor: 'green' , marginRight:4, borderRadius:6, width: 96 }}><Text>Booking</Text></Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}