import { View, Text, FlatList, Box } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, NativeBaseProvider } from 'native-base';


export default function VehicleFlatList({navigation}) {
    const[vehicles,setVehicles]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/CarMobileAppSpring_war/api/v1/vehicle")
        .then((response)=>response.json)
        .then((json)=>setVehicles(json))
        console.log("Helloo"+vehicles)
    })

    const addVehicle=()=>{
      navigation.navigate('vehicle')
      console.log(vehicles)
    }

    return (
    <NativeBaseProvider style={{padding:20}}>

     
      <Button mt={'2%'} size="md" variant="outline" colorScheme="primary" width={'30%'} 
        onPress={addVehicle }
      >
          Add Vehicle
        </Button>  
     
      <FlatList
      data={vehicles}
      renderItem={({ item }) =>
      <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>navigation.navigate('UpdateDelete',{obj:item})}>
          <Text style={{marginBottom:10,fontWeight:'bold',color:"black"}} >{item.brand}</Text>
          <Text style={{marginBottom:10,fontWeight:'bold',color:"black"}} >{item.model}</Text>
          <Text style={{marginBottom:10,fontWeight:'bold',color:"black"}} >{item.color}</Text>
          <Text style={{marginBottom:10,fontWeight:'bold',color:"black"}} >{item.price}</Text>
          <Text style={{marginBottom:10,color:'black'}} >{item.body}</Text>
      </TouchableOpacity>
  }
      />
    </NativeBaseProvider>
  )
}