import { View, Text,StyleSheet,ImageBackground,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, TextArea, Box, Button, Input } from 'native-base'
import { border } from 'native-base/lib/typescript/theme/styled-system';

export default function Vehicle({navigation}) {
  const image = { uri: "https://reactjs.org/logo-og.png" };

  const [vehicleId,setId]=useState([]);
  const [vehicleBrand,setBrand]=useState([]);
  const [vehicleModel,setModel]=useState([]);
  const [vehicleColor,setColor]=useState([]);
  const [vehiclePrice,setPrice]=useState([]);


  const vehicleFlatListOnPress=()=>{
    navigation.navigate("vehicleFlatList")
    console.log(vehicleId,vehicleBrand,vehicleModel,vehicleColor,vehiclePrice)
  }

  useEffect(()=>{
    fetch('http://localhost:8080/CarMobileAppSpring_war/api/v1/vehicle')
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  return (
    <NativeBaseProvider  style={styles.container}>
  <View style={{flex:4}}>
    
      <Box style={{flex:5,width:"100%" ,flexDirection:"row", alignItems:"flex-start"}}>
        <Box style={{height:"20%",width:"80%",flex:8}}>
          <Text style={{fontSize:30, color:"#192a56"}}> Vehicle </Text>
        </Box>

        <Box style={{backgroundColor:"yellow", marginTop:12,height:"50%",width:"30%",alignItems:"flex-start"}}>
        <Text style={{flex:2,flexDirection:"row",fontSize:12, color:"black"}}>
          {vehicleId}
      
        </Text>
        <Text style={{flex:2,flexDirection:"row",fontSize:12, color:"black"}}>
         
          {vehicleBrand}
         
        </Text>
        <Text style={{flex:2,flexDirection:"row",fontSize:12, color:"black"}}>
         
          {vehicleModel}
          
        </Text>
        <Text style={{flex:2,flexDirection:"row",fontSize:12, color:"black"}}>
         
          {vehicleColor}
         
        </Text>
        <Text style={{flex:2,flexDirection:"row",fontSize:12, color:"black"}}>
          
          {vehiclePrice}
        </Text>
        </Box>
        

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
      
      </ImageBackground>
     
      </Box>  
    
      </View>
      
      <View style={{flex:10}}>
      <Box alignItems="center" w="100%">
      <Input variant="rounded" placeholder="vid" width={'80%'} value={vehicleId} onChangeText={e=>{setId(e)}}/>
      <Input mt={1} variant="rounded" placeholder="vehicleBrand" width={'80%'} value={vehicleBrand} onChangeText={e=>{setBrand(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleModel" width={'80%'} value={vehicleModel} onChangeText={e=>{setModel(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleColor" width={'80%'} value={vehicleColor} onChangeText={e=>{setColor(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehiclePrice" width={'80%'} value={vehiclePrice} onChangeText={e=>{setPrice(e)}} />
         </Box>
    
    <Box alignItems={"center"}>
    <Button mt={1} size="md" variant="outline" colorScheme="success" width={'80%'} 
        onPress={vehicleFlatListOnPress}
      >
          Vehicles
        </Button>  
    </Box>
     

        </View>
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
  container:{
      flex: 1,
  },
  image: {
    flex:8,
    overflow:"hidden",
    borderWidth:3,
    borderColor:"red",
    height:150,
    justifyContent: "center",
    borderRadius:15,
    
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
})