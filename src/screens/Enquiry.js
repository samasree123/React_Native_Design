import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import RadioButton from '../radioButton/RadioButton'
import RadioButton2 from '../radioButton/RadioButton2'

const Enquiry = ({ navigation }) => {
    return (

        <ScrollView style={{ height: 850 }}>

            <ImageBackground source={require("../images/hotel.jpeg")}
                style={{ width: '100%', height: 160 }}
                imageStyle={{ borderBottomLeftRadius: 65 }}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', fontWeight: '900', marginLeft: 100, marginTop: 25, }}>Taraknath Travel</Text>
                <Text style={{
                    fontSize: 24, fontWeight: 'bold', color: 'white', paddingBottom: 10,
                    marginBottom: 40,
                    marginLeft: 20, marginTop: 40, fontStyle: 'italic', textDecorationLine: 'underline'
                }}>Enquiry Form</Text>
            </ImageBackground>

            <View style={{ width: 420, height: 900, backgroundColor: '#f2f7fcff' }}>
                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your Name" underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 7,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your Phone no" underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 7,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Destination Budget" underlineColorAndroid={'transparent'} />

                <Text style={{
                    alignSelf: 'stretch',
                    height: 25,
                    color: 'black',
                    marginTop: 15,
                    marginLeft: 30
                }}>Heads:</Text>


                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Child" underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Adult" underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder=" Others Req" underlineColorAndroid={'transparent'} />

                <Text style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 19,
                    color: 'black',
                    marginLeft: 30
                }}>Room Req:</Text>

                <RadioButton2></RadioButton2>
                <Text style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 19,
                    color: 'black',
                    marginLeft: 60
                }}>Food:</Text>
                
                <RadioButton></RadioButton>

                <Text style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 19,
                    color: 'black',
                    marginLeft: 40
                }}>Description:</Text>
                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 4,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 30,
                    width: 300
                }} placeholder=" " underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 4,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 30,
                    width: 300
                }} placeholder=" " underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 4,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 30,
                    width: 300
                }} placeholder=" " underlineColorAndroid={'transparent'} />

                <TouchableOpacity style={{
                    marginTop: 10,
                    height: 45,
                    width: 100,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    marginLeft: 150,
                    marginTop: 30,
                    backgroundColor: "black",
                    borderWidth: 1,
                    borderColor: "#dcdcdc",
                }} onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={{
                        color: "white",
                        fontSize: 12,
                    }}>Send Enquiry</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>











    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 90,
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",
        marginLeft: 5

    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 20
    }
});
export default Enquiry;