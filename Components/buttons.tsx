import React, { Component } from 'react';
import { View,StyleSheet, Text,Image,Button } from 'react-native';
import { Link } from "react-router-native";
import {withRouter} from "react-router"
 const Buttons = (props) => {
  
    return (
      <View style={{
        flexDirection: 'row',
       height: 80,
        padding: 20,
        backgroundColor:'white',
        marginTop:250,
        justifyContent: 'space-around',
      }}>
      <Button  onPress={()=>props.history.push("/list")} title="Go to Listing" />
      <Button  onPress={()=>props.history.push("/create")} title="Create" />
        {/* <Button title="Create"/> */}
        
  
        
      </View>
     
    );
  
}
export default withRouter(Buttons)
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