import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';





const Train = ({ navigation }) => {

    return (


        <ScrollView vertical={true} style={{ height: 980, }}>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} />
                <Text style={{ color: 'bold', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}>Train Ticket Booking In Serampore
                </Text>
                <View>
                    <Image source={require("../images/train.jpg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>
            <Text style={{
                margin: 20,
                marginLeft: 50, marginRight: 60, justifyContent: 'center'
            }}>Your search for the trusted tour operator in Serampore comes to an end at Taraknath Travels. We are a West Bengal-based entity in Serampore and engaged in serving the tourism space of the state. As a prompt and responsible tour operator, we proffer multiple services under the same roof. Flight booking and passport & visa services are our specialties. Moreover, you get the best assistance to book a railway ticket as well at no extra charges! Our teams of travel agents develop theme-based tour packages for domestic/international trips. According to the theme & vacation budget, anyone can choose the packages for a wildlife tour, adventure tour, pilgrimage tour, honeymoon tour, romantic tour, and others.</Text>




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
                    width: 300 }}placeholder="Tour Country" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="City to Travel" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Tour Start City" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Arrival On" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Duration" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder=" No. of Persons" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Budget" underlineColorAndroid={'transparent'}></TextInput>

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


export default Train;