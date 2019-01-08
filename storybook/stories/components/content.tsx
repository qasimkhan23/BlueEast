import React, { Component } from 'react';
import { View,StyleSheet, Text,Image } from 'react-native';
export const Content = ()=> {
  
    return (
      <View style={styles.welcome}>
        
        
  <Image source={require('./content.png')} style={{marginTop:18}}/>
  <Text style={{color:'#4286f4',textAlign:'center'}}>All the text goes here</Text>
 
        
      </View>
     
    );
  
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
  }
});