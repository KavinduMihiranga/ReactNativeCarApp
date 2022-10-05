import { View, Text, FlatList, Box ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, NativeBaseProvider } from 'native-base';


export default function VehicleFlatList({navigation}) {
  const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getVehicles();
    },[])

    const addVehicle=()=>{
      navigation.navigate('vehicle')
      console.log(vehicle)
    }

    const getVehicles=async()=>{
      fetch('https://fake-vehicles-api.herokuapp.com/api')
      .then((response) => response.json())
      .then((json) => setPosts(json));

    }

    return (
    <NativeBaseProvider style={{padding:20}}>
      <View style={{backgroundColor:"#130f40"}}>
        <View style={{alignItems:"flex-end"}}>
        <Button mt={'2%'} mb={'5'} size="md" variant="solid" colorScheme="primary" width={'30%'}
        onPress={addVehicle }
      >
          Add Vehicle
        </Button>  
        </View>
      
      </View>
       
     
      <FlatList
    
      style={{backgroundColor:"#130f40"}}
      data={posts}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) =>

      <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5,backgroundColor:"white", borderColor:"green"}} onPress={()=>navigation.navigate('updateDeleteVehicle',{obj:item})}>
        
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.__id}</Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.id_}</Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.manufacturer}</Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.model}</Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.year}</Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} >{item.vin}</Text>
    
    
 
  </TouchableOpacity>
  }
      />
     
     
    </NativeBaseProvider>
  )
}