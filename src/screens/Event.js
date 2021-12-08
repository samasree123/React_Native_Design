import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';





const Event = ({ navigation }) => {

    return (


        <ScrollView vertical={true} style={{ height: 980, }}>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} />
                <Text style={{ color: 'bold', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}>Event Management in Serampore
                </Text>
                <View>
                    <Image source={require("../images/event.jpg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>
            <Text style={{
                margin: 20,
                marginLeft: 50, marginRight: 60, justifyContent: 'center'
            }}>Event planning and management is a major responsibility that should be executed with perfection. Taraknath Travels is a professional event planner in Serampore (West Bengal). We are agile in planning different types of corporate and private events all over India. Our event managers coordinate with subcontractors for making the apt arrangements for catering and decorating the event site. Moreover, they ensure that everything is managed within the budget set by the client that doesn’t exceed. We hold expertise in planning events like MICE, wildlife tours, and educational excursions.</Text>




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
                    width: 300 }}placeholder=" Type Of Event" underlineColorAndroid={'transparent'}></TextInput>

                </View>

                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder=" Event Location" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }} placeholder="Event Date From" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Event Date To" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder="Expected Deligates" underlineColorAndroid={'transparent'}></TextInput>

                </View>
                <View style={{ marginTop: 10 }}>
                    <TextInput style={{   alignSelf: 'stretch',
                    height: 35,
                    marginTop: 10,
                    color: 'black',
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1,
                    marginLeft: 40,
                    width: 300 }}placeholder=" Subject" underlineColorAndroid={'transparent'}></TextInput>

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


export default Event;