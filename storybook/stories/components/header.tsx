import React, { Component } from 'react';
import { View,StyleSheet, Text,Button,Image,ToolbarAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export interface HeaderProps {
  title: string,
  page:string
  
}





export default class Header extends Component<HeaderProps, {}> {
    constructor(props:HeaderProps){
        super(props);
    }
   
  render() {
    return (
       <View
       style={{
         flexDirection: 'row',
         
        height: 80,
        width:360,
         padding: 20,
         backgroundColor:'#4286f4'
       }}>
      

  {this.props.page === 'home' || this.props.page === 'list'  ?  <MyButton/> : <ArrowLeft/>}


      
         <Text style = {styles.title}>
         {this.props.title}</Text>
       </View>

     
    );
  }
}
const MyButton = ()=>{
    return(
    <Icon.Button name="bars" backgroundColor="#4286f4" onPress={this.loginWithFacebook}/>
      

    );
  

}
const ArrowLeft = ()=>{
    return(
    <Icon.Button name="arrow-left" backgroundColor="#4286f4" onPress={this.loginWithFacebook}/>
      

    );
  

}
const styles = StyleSheet.create({
  
  
  title:{
    textAlign: 'center',
    fontSize: 20,
    marginTop:4,
    marginLeft:10,
    color:'white',
    
  }
});