import React, { Component } from 'react';
import { View,StyleSheet, Text,Image,TextInput,Picker,Button,ScrollView } from 'react-native';
import {withRouter} from 'react-router';
import { Formik } from "formik";
import * as Yup from "yup";
import {ADD_BILL} from '../Components/query';
import { withInputTypeProps } from "react-native-formik";
import Form from '../Components/form';
import Icon from 'react-native-vector-icons/FontAwesome';
interface State {
  site:string,
  device:string,
  month:string,
  count:number,
  List:array
}
export interface PickerProps {
  deleteRow:VoidFunction,
  updateUnitRate:VoidFunction,
  unitRateValue:string,
  updateBudget:VoidFunction,
  budgetValue:string,
  updateMonth:VoidFunction
  monthValue:string
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(),

  rate: Yup.string()
    .required(),

  budget: Yup.string()
    .required(),
    
  
});

class Create_Content extends Component<{},State> {
    constructor(props){
        super(props);
         this.array=[];
        this.state={
            site:'',
            device:'',
            month:'Aug',
            count:1,
            List:[
                {
                    id:0,
                    month:'Jan',
                    rate:'',
                    budget:''
                },
            
        ]


        }
    }
    
    addListItem = ()=>{
        let tempArr = this.state.List;

        tempArr.push({id:this.state.count++,month:'',rate:'',budget:''});
        
        validationSchema();
        
        this.setState({
         List: tempArr,
         count:this.state.count++

        })
    }
    deleteRow = (id)=>{
        console.log('id',id);
        let tempArr = this.state.List.filter((item)=>{
            
            if(item.id !== id) return item;
        });
        console.log('temparr',tempArr)
   
        // // <View>{index}</View>
        // // temp.splice(index,1);
        // // this.state.List.length > 1 ?
        //  this.setState({
        //      List:list         });
    // let list = this.state.List.slice();
    // list.splice(id,1);
    this.setState({
        List:tempArr
    })



    }
    updateSite = (site) => {
        this.setState({ site: site })
     }
     updateDevice = (device) => {
        this.setState({ device: device })
     }
    //  updateMonth = (month) => {
    //   console.log('update month function unit',month)
    //     this.setState({ month: month })
    //  }
     updateUnitRate = (id,text,setFieldValue) => {

      console.log('event',text)
       
      setFieldValue("rate",text);
       
       let tempArr = this.state.List;
       tempArr.map((item)=>(
        
         item.id === id ? item.rate = text :null
       ));
      this.setState({ List: tempArr })
   }
   updateBudget = (id,text,setFieldValue) => {

    console.log('event',text)
    setFieldValue("budget",text);
     
     
     let tempArr = this.state.List;
     tempArr.map((item)=>(
      
       item.id === id ? item.budget = text :null
     ));
    this.setState({ List: tempArr })
 }
 updateMonth = (id,month) => {

  console.log('month' ,month,'id',id)
  
   
   let tempArr = this.state.List;
   tempArr.map((item)=>(
    
     item.id === id ? item.month = month :null
   ));
  this.setState({ List: tempArr })
}
  
  render() {
    return (
      <View style={{
        
        flex:1,
        
       
        padding: 20,
    
      }}>
         <Formik onSubmit={()=>this.props.history.push("/list")}
            validationSchema={validationSchema}>
            {props => {
              return (
        <ScrollView>
        
  
  <Text style={styles.Label_Name}>Bill Name</Text>
  

    {/* <TextInput
          style={{height: 60,borderBottomWidth: 1,
            borderBottomColor: 'gray'}}
          placeholder="eg: Bedroom AC Bill"
          style={{marginLeft:20}}
          
        /> */}
       
              
                <View style={{flexDirection:'row' }}>

           <Icon size={30} name="building" backgroundColor="#4286f4" style ={styles.icon}/>
                  <TextInput style={{height: 60,borderBottomWidth: 1,marginLeft:20,
            borderBottomColor: 'gray'}}
            placeholder="eg: Bedroom AC Bill" 
                  onChangeText={text => props.setFieldValue("name", text)}/>
                   </View>
                   <View>
                <Text style={{color:'red',fontSize:15,marginLeft:48}}>{props.errors.name}</Text>

                <Text style={{color:'red',fontSize:15,marginLeft:48}}>{props.errors.rate}</Text>

                <Text style={{color:'red',fontSize:15,marginLeft:48}}>{props.errors.budget}</Text>
                  
                </View>
            
        {/* <Form/> */}
        
      

  <Text style={styles.Label_Site}>Select Site</Text>
        <View style ={{flexDirection:'row'}}>
        
        
        
        <Icon size={30} name="question" backgroundColor="#4286f4" style ={styles.icon}/>
        <Picker selectedValue =  {this.state.site} style ={{width: 260,marginLeft:22}} onValueChange = {this.updateSite}>
                <Picker.Item label = "My Home" value = "My Home" />
               <Picker.Item label = "Website" value = "Website" />
               <Picker.Item label = "BlueEast" value = "BlueEast" />
            </Picker>


        </View>

        <Text style={styles.Label_Device}>Select Device</Text>
        <View style ={{flexDirection:'row'}}>
        
        
        
        <Icon size={30} name="wifi" backgroundColor="#4286f4" style ={styles.icon}/>
        <Picker selectedValue =  {this.state.device} style ={{width: 260,marginLeft:5}} onValueChange = {this.updateDevice}>
               
               <Picker.Item label = "Bedroom AC" value = "Bedroom AC" />
               <Picker.Item label = "Office AC" value = "Office AC" />
               <Picker.Item label = "Guestroom AC" value = "Guestroom AC" />
            </Picker>


        </View>


        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:5}}>

            <Text style={{color:'#4286f4'}}>Select Month</Text>
            <Text style={{color:'#4286f4'}}>Unit Rate</Text>
            <Text style={{color:'#4286f4'}}>Budget</Text>

        </View>
        
            {this.state.List.map((item,index)=>(
                 
            <PickerRow key={index}
             
              
              deleteRow={()=> this.deleteRow(item.id)}
               updateUnitRate = {(text)=>this.updateUnitRate(item.id,text,props.setFieldValue)}
               unitRateValue = {this.state.List[index].rate}
               updateBudget = {(text)=>this.updateBudget(item.id,text,props.setFieldValue)}
               budgetValue = {this.state.List[index].budget}

               updateMonth = {(itemValue)=>this.updateMonth(item.id,itemValue)}
               monthValue = {this.state.List[index].month}
               
               
               />
            
            ))
         
            }
            


       
       <View style={{flexDirection:'row'}}><Button onPress={this.addListItem} title = "Add more"/></View>
       <View
          style={{
            marginTop:50,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

       
       <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:30,marginBottom:30}}>
       <Button title = "Next" onPress={props.handleSubmit}/></View>
       


 </ScrollView>
          );
        }}
    </Formik>
      </View>
     
    );
  }
}
export default withRouter(Create_Content);
const PickerRow = (props:PickerProps) =>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>

       <Picker selectedValue={props.monthValue} style ={{width: 70,marginLeft:10}} onValueChange={(itemValue)=>props.updateMonth(itemValue)}>
               
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
          keyboardType='numeric'
          onChangeText={(text)=>props.updateUnitRate(text)}
          value = {props.unitRateValue}
 
          
          
          
        />
        <TextInput
          style={{height: 40,marginLeft:20,borderBottomWidth: 1,
            borderBottomColor: 'gray',}}
          placeholder="pick"
          keyboardType='numeric'
          onChangeText={(text)=>props.updateBudget(text)}
          value = {props.budgetValue}
          
          
          
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