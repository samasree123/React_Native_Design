import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';





const Services = ({ navigation }) => {

    return (



        <ScrollView vertical={true} style={{ height: 1000, }}>
            <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")} />
                <Text style={{ color: 'dark', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}> Our Services
                </Text>
                <View>
                    <Image source={require("../images/hotel.jpeg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>
         

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -40, marginTop: 30 }}>
                <View style={{ backgroundColor: "#FEFEFE", height: 180, width: 280, borderRadius: 10, padding: 5, marginLeft: 50 }}>
                    <Image source={require('../images/Tour.jpg')}
                        style={{ width: 280, borderRadius: 15, height: 180 }}></Image>
                </View>
                <View style={{ backgroundColor: "#FEFEFE", height: 80, width: 160, borderRadius: 10, padding: 5, marginLeft: 30  }}>
                    <Image source={require('../images/party.jpg')}
                        style={{ width: 300, borderRadius: 15, height: 80, }}></Image>

                    <Image source={require('../images/car.jpg')}
                        style={{ width: 300, borderRadius: 15, marginTop: 10, height: 80 }}></Image>
                </View>

              
                <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                </View>
                <View style={{  height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 25, marginTop: 70 }}>

                </View>
                <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                </View>

              
            </ScrollView>
            <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("TourOperators")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Tour Operators</Text>

                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 15,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("CarRental")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Car Rental</Text>

                    </TouchableOpacity>

                </View>


                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 15,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Event")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Event Management</Text>

                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 13,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Hotel")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Hotel Booking</Text>

                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 13,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Train")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Train Ticket Booking</Text>

                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 13,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Flight")}>
                        <Text style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Flight Ticket Booking</Text>

                    </TouchableOpacity>

                </View>

                <View style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                
                    paddingVertical: 10,
                    borderRadius: 23
                }}></View>

        </ScrollView>


    )
}
export default Services;