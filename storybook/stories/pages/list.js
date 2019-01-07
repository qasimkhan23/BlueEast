import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'list'/>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </View>
        
        
        
        </View>
        
        
        
      </View>
     
    );
  }
}
const Card = ()=>{
    return(
        <View style ={{}}>
            <View style ={{backgroundColor:'blue',width:150,height:190,marginTop:20,marginLeft:20,padding:20}}>
            <Text>hello</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexWrap: 'wrap',
    marginTop: 20,
    backgroundColor: 'red',
    width:360,   
  }
});