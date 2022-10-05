import { View, Text, FlatList, Box } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, NativeBaseProvider } from 'native-base';


export default function VehicleFlatList({navigation}) {
    const[vehicles,setVehicles]=useState([]);

    useEffect(()=>{
        getVehicles();
    },[])

    const addVehicle=()=>{
      navigation.navigate('vehicle')
      console.log(vehicles)
    }

    const getVehicles=async()=>{
      try {
        const response=await
        fetch('http://localhost:7000/vehicle');
        const json=await response.json();
        setVehicles(json.vehicles)
      } catch (error) {
        console.error(error)
      }finally{
        setLoading(false)
      }
    }

    return (
    <NativeBaseProvider style={{padding:20}}>
      <View style={{backgroundColor:"#130f40"}}>
        <View style={{alignItems:"flex-end"}}>
        <Button mt={'2%'} size="md" variant="solid" colorScheme="primary" width={'30%'}
        onPress={addVehicle }
      >
          Add Vehicle
        </Button>  
        </View>
      
      </View>
       
     
      <FlatList
      style={{backgroundColor:"#130f40"}}
      data={vehicles}
      keyExtractor={({ id }, index) => id}
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