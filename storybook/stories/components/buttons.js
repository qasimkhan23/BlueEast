import React, { Component } from 'react';
import { View,StyleSheet, Text,Image,Button } from 'react-native';
export default class Buttons extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
       height: 80,
        padding: 20,
        backgroundColor:'white',
        justifyContent: 'space-around',
      }}>
        <Button title="Go to Listing" />
        <Button title="Next" style={{backgroundColor:'black'}} />
        
  
        
      </View>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    marginTop: 20,
    backgroundColor: '#F5FCFF',
   
  },
  welcome: {
    flex: 1,
    margin: 20,

    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
    width: 320,
  },
  button:{

    padding:20,

    
      backgroundColor:'black'
  },
  button_Listing:{
     
    backgroundColor:'blue'
}
});