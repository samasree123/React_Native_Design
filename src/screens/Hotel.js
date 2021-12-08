import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';





const Hotel = ({ navigation }) => {

    return (


        <ScrollView vertical={true} style={{ height: 980, }}>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} />
                <Text style={{ color: 'bold', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}>Hotel Booking in Serampore
                </Text>
                <View>
                    <Image source={require("../images/hotel.jpeg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>
            <Text style={{
                margin: 20,
                marginLeft: 50, marginRight: 60, justifyContent: 'center'
            }}>Based in West Bengal, Taraknath Travels is a tour operator in Serampore. Holidaymakers approach us for making a reservation in different hotels & accommodations. Our teams of travel agents in Serampore maintain a track record of all licensed 2-star, 3-star, 4-star, and 5-star hotels in different Indian cities. Furthermore, we also make bookings for guesthouses, resorts, and motels as well. Our specialty lies in making a reservation for well-maintained forest rest houses. Whether it is a leisure trip, corporate trip or wildlife tour, contact us for making the best booking for a comfortable sojourn.</Text>




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
                    width: 300 }}placeholder="Hotel Destination" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder=" Check In" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Check Out" underlineColorAndroid={'transparent'}></TextInput>

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
                    width: 300 }}placeholder=" No. of Rooms" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder=" Budget" underlineColorAndroid={'transparent'}></TextInput>

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


export default Hotel;