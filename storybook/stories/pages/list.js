import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'list'/>

        <Card/>
        
        
        
      </View>
     
    );
  }
}
const Card = ()=>{
    return(
        <View style ={{flex:3}}>
            <View style ={{backgroundColor:'blue'}}>
            <Text>hello</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    marginTop: 20,
    backgroundColor: 'white',
    width:360,   
  }
});