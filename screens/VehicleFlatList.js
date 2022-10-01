import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function VehicleFlatList() {
    const[vehicles,setVehicles]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:7000/vehicle")
        .then((response)=>response.json)
        .then((json)=>setVehicles(json))
    })
    return (
    <View style={{padding:20}}>
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
    </View>
  )
}