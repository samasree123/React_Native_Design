import React from 'react';
import {
    StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Animmated, ImageBackground, ScrollView, FlatList, TextInput
} from 'react-native';





const BookingDetails = ({ navigation }) => {

    return (
        
            
            <ScrollView vertical={true} style={{ height: 980, }}>
                <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")}/>
                    <Text style={{ color: 'dark', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'Underline' }}>Travel Agency
                    </Text>
                    <View>
                        <Image source={require("../images/hotel.jpeg")} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 3, marginLeft: 20, }}>Gallery</Text>



                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -30, marginTop: 30 }}>
                <View style={{ backgroundColor: "#FEFEFE", height: 180, width: 280, borderRadius: 10, padding: 5, marginLeft: 50 }}>
                        <Image source={require('../images/1.jpg')}
                            style={{ width: 280, borderRadius: 15, height: 180 }}></Image>
                    </View>


                    <View style={{ backgroundColor: "#FEFEFE", height: 80, width: 160, borderRadius: 10, padding: 5, marginLeft: 30 }}>
                        <Image source={require('../images/kulu.jpg')}
                            style={{ width: 300, borderRadius: 15, height: 80, }}></Image>

                        <Image source={require('../images/manali.jpg')}
                            style={{ width: 300, borderRadius: 15, marginTop: 10, height: 80 }}></Image>
                    </View>

                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>
                    <View style={{ height: 160, width: 150, borderRadius: 10, padding: 5, marginLeft: 25, marginTop: 70 }}>

                    </View>
                    <View style={{ flexDirection: "row", width: 10, alignItems: "center" }}>
                    </View>

                </ScrollView>
                <View style={{ height: 980 }}>
                    <View>
                        <Text style={{ marginLeft: 40, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Inclusions:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 50, marginRight: 30, justifyContent: 'center' }}>AP (Room + Breakfast + Lunch + Dinner)
                            AP (Room + Breakfast + Lunch + Dinner)
                            All Accommodation.
                            All Food (Breakfast, Lunch, Evening Tea-Snacks and Dinner).
                            All Transportation.
                            All Sightseeing.</Text>

                    </View>
                    <View>
                        <Text style={{ marginLeft: 40, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Exclusions:</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 50, marginRight: 30, textAlign: 'justify' }}>AP (Room + Breakfast + Lunch + Dinner)
                            AP (Room + Breakfast + Lunch + Dinner)
                            All Accommodation.
                            All Food (Breakfast, Lunch, Evening Tea-Snacks and Dinner).
                            All Transportation.
                            All Sightseeing.</Text>

                    </View>

                    <View>
                        <Text style={{ marginLeft: 40, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Payments Terms:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 50, marginRight: 30, textAlign: 'justify' }}>Payment Terms & Methods :
                            Payment Terms & Methods :
                            For Reservation 40% per head shall have to be deposited and final payment will have to be made before 15 days from the date of journey by cash.</Text>

                    </View>

                    <View>
                        <Text style={{ marginLeft: 40, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Price & Rates:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 50, marginRight: 30, textAlign: 'justify' }}>Adult	Above 12 years	INR 22500 / Adult ( With Tax )</Text>

                    </View>

                    <View>
                        <Text style={{ marginLeft: 30, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Cancellation & Refund Policy:</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'grey', marginLeft: 50, marginRight: 30, textAlign: 'justify' }}>After Booking AC & SL Class Passengers Rs.1000/- & Rs.700/- + 10% per head of the package cost.
                            45 days before AC & SL Class Passengers Rs.1000/- & Rs.700/- + 20% per head of the package cost.
                            30 days before AC & SL Class Passengers Rs.1000/- & Rs.700/- + 30% per head of the package cost.
                            20 days before AC & SL Class Passengers Rs.1000/- & Rs.700/- + 40% per head of the package cost.
                            15 days before AC & SL Class Passengers Rs.1000/- & Rs.700/- + 45% per head of the package cost.
                            10 days before AC & SL Class Passengers Rs.1000/- & Rs.700/- + 60% per head of the package cost.
                            No Refund is Allowed of Cancellation is made within 10 days.</Text>

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
                        }}>Book</Text>
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


export default BookingDetails;