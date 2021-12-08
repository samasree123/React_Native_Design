import React, { Component } from 'react';
import {
  StyleSheet, Text, Image, View, TouchableOpacity
} from 'react-native';


class RadioButton extends Component {
  constructor()
  {
    super()
    this.state={
      data:['All Meals', 'Break Fast', 'Break Fast and Dinner'],
      checked: 0
    }
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        {
          this.state.data.map((data,key)=>{
            return(
              <View>
               {this.state.checked==key?
               <TouchableOpacity style={styles.btn}>
                 <Text></Text>
                  <Image style={styles.img} source={{uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/868143-200.png'}}>

                  </Image>
                  <Text>{data}</Text>
               </TouchableOpacity>
                :
               <TouchableOpacity onPress={()=>{this.setState({checked:key})}} style={styles.btn}>
                  <Image style={styles.img} source={{uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/868142-200.png'}}/>
                  <Text>{data}</Text>
               </TouchableOpacity>


          }
              </View>
            )
          })
        }

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',

  },
  img: {
    height:20,
    width:20,
    marginRight: 5,
  },
  btn: {
    flexDirection:"row",
    alignItems:'center',
    marginLeft:50,
    marginBottom: 10
  }
});
export default RadioButton;