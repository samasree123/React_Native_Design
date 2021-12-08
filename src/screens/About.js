import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground, SafeAreaView, } from 'react-native'


const About = ({ navigation }) => {
   return (
      <ScrollView style={{ height: 870 }}>

         <ImageBackground source={require("../images/hotel.jpeg")}
            style={{ width: '100%', height: 160 }}
            imageStyle={{ borderBottomLeftRadius: 65 }}>

            <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', fontWeight: '900', marginLeft: 100, marginTop: 25, }}>Taraknath Travel</Text>
           
         </ImageBackground>

         <View style={{ width: 450, height: 640, backgroundColor: '#f2f7fcff' }}>
            <Text style={{
               flex: 1,
               margin: 20,
               marginLeft: 50, marginRight: 60, justifyContent: 'center'
            }}>
               Taraknath Travels is proud to introduce itself as a pioneer
               in the West Bengal tourism sphere.
               We are a domestic and international travel management company
               that facilitates clients with best services.
               Mr. Manas Mahapatra established the company back in the year
               2006 in Serampore.
               The main aim behind the establishment of
               the company was to reduce the hassle faced by travelers.
               At us, you are facilitated with car rental and event
               planning services at pocket-friendly charges.
               Moreover,
               we also hold expertise in booking hotels as well.
               Our impeccable work has fetched us fame in the industry.
               We are pillared by a diligent workforce that provides
               immediate resolution to clients. Moreover,
               we strongly believe in establishing relations with clients.
               The industry-based knowledge and consistency of our workforce have been helping us expanding the clientele in and around Serampore. Since inception, we have served innumerable clients across West Bengal. Our efforts are widely lauded by all clients that turn to us.


               Taraknath Travels is a client-centered company. We are considerate regarding your priorities and assure that your experience with us is worth every penny spent. Whatever vacation package you want or any service you want to avail, get in touch with us and get served with the best.

            </Text>

         </View>






      </ScrollView>
   )
}
export default About;