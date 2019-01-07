import React, { Component } from 'react';
import { View,StyleSheet, Text,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'list'/>
        
        <ScrollView  >
       <View style={{display:'flex', flexDirection:'row', flexWrap: 'wrap',}} >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> 
            </View>
            
        </ScrollView>
        
        
        
        
        
      </View>
     
    );
  }
}
const Card = ()=>{
    return(
      <ScrollView
      >
        <View style ={{}}>
            <View style ={{backgroundColor:'blue',width:150,height:190,marginTop:20,marginLeft:20,padding:20}}>
            <Text>hello</Text>
            </View>
            
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    marginTop: 20,
    backgroundColor: 'red',
    width:360,   
  }
});