import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'


//import AppStatusBar from '../components/AppStatusBar';
//import Tabbar from '../navigation/Tabbar';




//import Card from "../../components/Card";
const HomeScreen = ({ navigation }) => {


    return (
        


            <ScrollView vertical={true} style={{ height: 830 }}>
                <ImageBackground source={require("../images/hotel.jpeg")}
                    style={{ width: '109%', height: 300, }}
                    imageStyle={{ borderBottomLeftRadius: 65 }}>

                    <View style={{ flexDirection: 'row' }}>

                    </View>

                    <View style={{ paddingTop: 45, paddingLeft: 11 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', fontWeight: '900', marginLeft: 100 }}>Taraknath Travel</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'normal', color: 'white', fontWeight: 'bold' }}>Hi John</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'normal', color: 'white', fontWeight: '500' }}>Let's Go For A Travel</Text>

                    </View>
                    {/* <View>
                      <TextInput
                      style={{marginTop:60, backgroundColor: '#fff', paddingLeft: 24, Padding: 12, borderTopRightRadius:40, borderBottomRightRadius: 40, width:'90%', height:'100%'}}
                      placeholder='Search Destination'
                      placeholderTextColor='#666'></TextInput>
                      <Feather name='search' size={22} color='#666' style={{position: 'absolute', top: 57, right: 60, opacity: 0.6}}/>
                      
                  </View> */}

                </ImageBackground>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 30, marginLeft: 20, }}>Upcoming Tour</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -40, marginTop: 30 }}>
                    <View style={{ backgroundColor: "#FEFEFE", height: 240, width: 230, borderRadius: 15, padding: 5, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")}>
                            <ImageBackground source={require('../images/simla.png')}
                                style={styles.cardImage}>

                            </ImageBackground>
                        </TouchableOpacity></View>


                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 240, width: 230, borderRadius: 15, padding: 5, marginRight: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/gangtok.png')}
                                style={styles.cardImage}></ImageBackground>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: "row", width: 2, alignItems: "center" }}></View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 240, width: 190, borderRadius: 15, padding: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/nepal.png')}
                                style={styles.cardImage}></ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", width: 2, alignItems: "center" }}></View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 240, width: 50, borderRadius: 15, padding: 5, marginLeft: 70 }}></View>

                </ScrollView>

                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15, marginLeft: 20, }}>Instate</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -40, marginTop: 30 }}>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/gangtok.png')}
                                style={{ width: 150, borderRadius: 15, height: 150, }}></ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/dooars.png')}
                                style={{ width: 150, borderRadius: 15, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/daargeling.png')}
                                style={{ width: 150, borderRadius: 15, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/bel.jpg')}
                                style={{ width: 150, borderRadius: 15, height: 150 }}></ImageBackground>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", width: 2, alignItems: "center" }}></View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 100, width: 10, borderRadius: 15, padding: 5, marginLeft: 70 }}></View>


                </ScrollView>


                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15, marginLeft: 20, }}>National</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -40, marginTop: 30 }}>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/simla.png')}
                                style={{ width: 210, borderRadius: 15, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/kashmir.png')}
                                style={{ width: 210, borderRadius: 10, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/chardham.png')}
                                style={{ width: 210, borderRadius: 10, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/dharmshala.png')}
                                style={{ width: 210, borderRadius: 10, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/dui.png')}
                                style={{ width: 210, borderRadius: 10, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>


                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 210, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/duidhar.png')}
                                style={{ width: 210, borderRadius: 10, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", width: 2, alignItems: "center" }}></View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 100, width: 10, borderRadius: 15, padding: 5, marginLeft: 70 }}></View>

                </ScrollView>


                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15, marginLeft: 20, }}>Inter-National</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -40, marginTop: 30 }}>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 300, borderRadius: 10, padding: 5, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")}>
                            <ImageBackground source={require('../images/nepal.png')}
                                style={{ width: 290, borderRadius: 15, height: 150, marginRight: 50 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flexDirection: "row", width: 5, alignItems: "center" }}>
                    </View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 160, width: 300, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} >
                            <ImageBackground source={require('../images/party.jpg')}
                                style={{ width: 290, borderRadius: 15, height: 150 }}></ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", width: 2, alignItems: "center" }}></View>
                    <View style={{ backgroundColor: "#FEFEFE", height: 100, width: 10, borderRadius: 15, padding: 5, marginLeft: 70 }}></View>


                </ScrollView>

                {/*extra*/}






                <View style={{ backgroundColor: "#FEFEFE", height: 20, width: 400, borderRadius: 10, padding: 5, marginLeft: 10 }}>
                </View>











            </ScrollView>

                  









        


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    cardImage: {
        height: 230,
        width: 230,
        marginRight: 20,
        padding: 10,
        overflow: 'scroll',
        borderRadius: 15,

    }
});
export default HomeScreen;
