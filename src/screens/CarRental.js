import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';
import RadioButton3 from '../radioButton/RadioButton3';




const CarRental = ({ navigation }) => {

    return (


        <ScrollView vertical={true} style={{ height: 980, }}>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} />
                <Text style={{ color: 'bold', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}>Car Rental In Serampore
                </Text>
                <View>
                    <Image source={require("../images/car.jpg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>
            <Text style={{
                margin: 20,
                marginLeft: 50, marginRight: 60, justifyContent: 'center'
            }}>Taraknath Travels is a respected name in the tourism realm of West Bengal. We are engaged in providing car rental services from Serampore. Ours is a vast fleet of different cars that can be hired anytime for traveling all over West Bengal. At us, clients can hire the economy cars, premium cars, luxury cars, standard cars, minivans, and SUV-MUV. Apart from these, you are liberated for intercommunicating with us regarding wedding car rental service that we offer across the state. Our cars are duly maintained and driven by licensed chauffeurs. Contact us for further queries related to booking of cars.</Text>




            <View style={{ height: 980 }}>
                <View>
                    <Text style={{ marginLeft: 40, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        Fill Your Requirements :</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Want to Book" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View style={{ marginTop: 10 }}>
                <Text style={{
                    alignSelf: 'stretch',
                    height: 35,
                    marginTop: 19,
                    color: 'black',
                    marginLeft: 40
                }}> Tour Type:</Text>
                    <RadioButton3></RadioButton3>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Departure Date	" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder=" Destination from" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Destination to" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder=" No. of Vehicles" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="No. of Persons" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Description
                    [ upto 2000 characters ]" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View>
                    <Text style={{ marginLeft: 40, marginTop: 25, fontSize: 18, fontWeight: 'bold' }}>
                    Fill Your Personal Information :</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Your Name" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Your E-mail" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Select Country" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="City" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Contact/Mobile No" underlineColorAndroid={'transparent'}></TextInput>

                </View>
               
               
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

    body: {
        backgroundColor: "#E6E6FA",
    },





});


export default CarRental;