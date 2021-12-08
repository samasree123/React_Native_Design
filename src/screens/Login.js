import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text,TextInput, ScrollView, TouchableOpacity, Image, ImageBackground,} from 'react-native'


const Login = ({ navigation }) => {
    return(
        <View>
            <ScrollView style={{height:890}}>
            
            <ImageBackground source={require("../images/hotel.jpeg")} 
               style={{width:'100%', height: 260}}
               imageStyle={{borderBottomLeftRadius:65}}>
                   <Text style={{fontSize:20, fontWeight:'normal',color:'white',fontWeight:'900', marginLeft:100,marginTop:35,}}>Taraknath Travel</Text>
                  
               </ImageBackground>

               <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:40
                 }}
                >
                    
                    Let's Go For A Travel</Text>


                
                <TextInput style={{
                    width:300,
                    height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    
                }} placeholder="Your Email" underlineColorAndroid={'transparent'}>
                    

                    

                    
                </TextInput>

                <TextInput style={{
                     width:300,
                     height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}placeholder="Your Password" underlineColorAndroid={'transparent'}></TextInput>

<View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Sign In</Text>

                    </TouchableOpacity>
                    
                    </View>
                    <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}> Register </Text>

                    </TouchableOpacity>
                    
                    </View>

               </ScrollView>
               </View>
        
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
        marginLeft:90,
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
        marginLeft:5
        
      },
      radioButtonText: {
        fontSize: 16,
    marginLeft: 20
      }
  });
export default Login;