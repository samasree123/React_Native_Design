import React from 'react';
import {
    StyleSheet,
    Text, View, TextInput, TouchableOpacity, CheckBox, ImageBackground, Image, ScrollView
} from 'react-native';


const Tour = ({ navigation }) => {
    return (

        <ScrollView style={{ height: 780 }}>

            <ImageBackground source={require("../images/hotel.jpeg")}
                style={{ width: '100%', height: 160 }}
                imageStyle={{ borderBottomLeftRadius: 65 }}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', fontWeight: '900', marginLeft: 100, marginTop: 25, }}>Taraknath Travel</Text>
                <Text style={{
                    fontSize: 24, fontWeight: 'bold', color: 'white', paddingBottom: 10,
                    marginBottom: 40,
                    marginLeft: 20, marginTop: 40, fontStyle: 'italic', textDecorationLine: 'underline'
                }}>Book Your Tour</Text>
            </ImageBackground>
            <View style={{ width: 420, height: 1000, backgroundColor: '#f2f7fcff' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 55, marginLeft: 30, textDecorationLine: 'Underline' }}>Fill Your Requirements</Text>
                <Text style={{
                    alignSelf: 'stretch',
                    height: 25,
                    color: 'black',
                    marginTop: 35,
                    marginLeft: 40
                }}>Arrival On:</Text>

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="MM/DD/YY" underlineColorAndroid={'transparent'} />

                <Text style={{
                    alignSelf: 'stretch',
                    height: 25,
                    color: 'black',
                    marginTop: 15,
                    marginLeft: 40
                }}>Departure On:</Text>

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="MM/DD/YY" underlineColorAndroid={'transparent'} />

                <Text style={{
                    alignSelf: 'stretch',
                    height: 25,
                    color: 'black',
                    marginTop: 15,
                    marginLeft: 40
                }}>No. Of persons:</Text>

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Adults" underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Child" underlineColorAndroid={'transparent'} />

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
                    marginTop: 3,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 37,
                    width: 300
                }} placeholder=" " underlineColorAndroid={'transparent'} />

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 4,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 37,
                    width: 300
                }} placeholder=" " underlineColorAndroid={'transparent'} />

                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 45, marginLeft: 30, textDecorationLine: 'Underline' }}>Fill Your Personal Information</Text>
               

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your Name" underlineColorAndroid={'transparent'} />

               

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your Email" underlineColorAndroid={'transparent'} />

                <Text style={{
                    alignSelf: 'stretch',
                    height: 25,
                    color: 'black',
                    marginTop: 15,
                    marginLeft: 40
                }}>Select Country:</Text>

               

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your City" underlineColorAndroid={'transparent'} />

               

                <TextInput style={{
                    alignSelf: 'stretch',
                    height: 40,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300
                }} placeholder="Your Contact no." underlineColorAndroid={'transparent'} />


                <TouchableOpacity style={{
                    marginTop: 7,
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
                    }}>Book</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>








    )

}

export default Tour;