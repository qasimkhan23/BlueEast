import React, { Component } from 'react';
import { View,StyleSheet, Text,Image,TextInput,Picker,Button,ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Content extends Component {
    constructor(props){
        super(props);
         this.array=[];
        this.state={
            site:'',
            device:'',
            month:'',
            count:1,
            counter:[
                {
                    id:0
                },
            
        ]


        }
    }
    
    addCounter = ()=>{
        let tempArr = this.state.counter;

        tempArr.push({id:this.state.count++});
        
        
        this.setState({
         counter: tempArr,
         count:this.state.count++

        })
    }
    deleteRow = (id)=>{
        console.log('id',id);
        let tempArr = this.state.counter.filter((item)=>{
            
            if(item.id !== id) return item;
        });
        console.log('temparr',tempArr)
   
        // // <View>{index}</View>
        // // temp.splice(index,1);
        // // this.state.counter.length > 1 ?
        //  this.setState({
        //      counter:list         });
    // let list = this.state.counter.slice();
    // list.splice(id,1);
    this.setState({
        counter:tempArr
    })



    }
    updateSite = (site) => {
        this.setState({ site: site })
     }
     updateDevice = (device) => {
        this.setState({ device: device })
     }
     updateMonth = (month) => {
        this.setState({ month: month })
     }
  render() {
    return (
      <View style={{
        
        flex:1,
        
       
        padding: 20,
    
      }}>
        
        <ScrollView>
        
  
  <Text style={styles.Label_Name}>Bill Name</Text>
  <View style={{flexDirection:'row'}}>

  <Icon size={30} name="building" backgroundColor="#4286f4" style ={styles.icon}/>
    <TextInput
          style={{height: 60,borderBottomWidth: 1,
            borderBottomColor: 'gray'}}
          placeholder="eg: Bedroom AC Bill"
          style={{marginLeft:20}}
          
        />
        
        </View>

  <Text style={styles.Label_Site}>Select Site</Text>
        <View style ={{flexDirection:'row'}}>
        
        
        
        <Icon size={30} name="building" backgroundColor="#4286f4" style ={styles.icon}/>
        <Picker selectedValue =  {this.state.site} style ={{width: 260,marginLeft:10}} onValueChange = {this.updateSite}>
                <Picker.Item label = "My Home" value = "My Home" />
               <Picker.Item label = "Website" value = "Website" />
               <Picker.Item label = "BlueEast" value = "BlueEast" />
            </Picker>


        </View>

        <Text style={styles.Label_Device}>Select Device</Text>
        <View style ={{flexDirection:'row'}}>
        
        
        
        <Icon size={30} name="building" backgroundColor="#4286f4" style ={styles.icon}/>
        <Picker selectedValue =  {this.state.device} style ={{width: 260,marginLeft:10}} onValueChange = {this.updateDevice}>
               
               <Picker.Item label = "Bedroom AC" value = "Bedroom AC" />
               <Picker.Item label = "Office AC" value = "Office AC" />
               <Picker.Item label = "Guestroom AC" value = "Guestroom AC" />
            </Picker>


        </View>


        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>

            <Text style={{color:'#4286f4'}}>Select Month</Text>
            <Text style={{color:'#4286f4'}}>Unit Rate</Text>
            <Text style={{color:'#4286f4'}}>Budget</Text>

        </View>
        
            {this.state.counter.map((item,index)=>(
                
            <PickerRow key={index} month = {this.state.month} updateMonth = {this.updateMonth} deleteRow={()=> this.deleteRow(item.id)} index = {index}/>
            ))
         
            }
            


       
       <View style={{flexDirection:'row'}}><Button onPress={this.addCounter} title = "Add more"/></View>
       


 </ScrollView>
        
      </View>
     
    );
  }
}
const PickerRow = (props) =>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>

       <Picker selectedValue =  {props.month} style ={{width: 70,marginLeft:10}} onValueChange={props.updateMonth}>
               
               <Picker.Item label = "Jan" value = "Jan" />
               <Picker.Item label = "Feb" value = "Feb" />
               <Picker.Item label = "Mar" value = "Mar" />
               <Picker.Item label = "Apr" value = "Apr" />
               <Picker.Item label = "May" value = "May" />
               <Picker.Item label = "Jun" value = "Jun" />
               <Picker.Item label = "Jul" value = "Jul" />
               <Picker.Item label = "Aug" value = "Aug" />
               <Picker.Item label = "Sep" value = "Sep" />
               <Picker.Item label = "Oct" value = "Oct" />
               <Picker.Item label = "Nov" value = "Nov" />
               <Picker.Item label = "Dec" value = "Dec" />
            </Picker>
            <TextInput
          style={{height: 40,marginLeft:20,borderBottomWidth: 1,
            borderBottomColor: 'gray',}}
          placeholder="pick"
          
          
          
        />
        <TextInput
          style={{height: 40,marginLeft:20,borderBottomWidth: 1,
            borderBottomColor: 'gray',}}
          placeholder="pick"
          value = "hello"
          
          
        />

        {/* <Icon.Button size={15} name="trash" color = "transparent" style={{marginTop:20}}  onPress={props.deleteRow}/> */}
        <Icon size={15} name="trash" backgroundColor="black" style={{marginTop:20}} onPress={props.deleteRow} />

        </View>
    )
}
const styles = StyleSheet.create({
  
 
  Label_Name:{
    color:'#4286f4',
    marginLeft:48,


  },
  Label_Site:{
    color:'#4286f4',
    marginLeft:48,
    marginTop:6
    
  },
  Label_Device:{
    color:'#4286f4',
    marginLeft:48,
    marginTop:6
    

  },
  icon:{
      marginTop:8
  }
});