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

      <View>
        
      </View>
  <View style={{flex:4, backgroundColor:"#130f40"}} >
    
      <Box style={{flex:5,width:"100%" ,flexDirection:"row", alignItems:"flex-start"}}>
        <Box style={{height:"20%",width:"80%",flex:8}}>
          <Text style={{fontSize:30, color:"#ffffff"}}> Vehicle </Text>
        </Box>  

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
      
      </ImageBackground>
     
      </Box>  
    
      </View>
      
      <View style={{flex:10 , backgroundColor:"#130f40"}}>
      <Box alignItems="center" w="100%">
      <Input variant="rounded" placeholder="vid" width={'80%'}color={"#ffffff"} value={vehicleId} onChangeText={e=>{setId(e)}}/>
      <Input mt={1} variant="rounded" placeholder="vehicleBrand" color={"#ffffff"}  width={'80%'} value={vehicleBrand} onChangeText={e=>{setBrand(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleModel" color={"#ffffff"} width={'80%'} value={vehicleModel} onChangeText={e=>{setModel(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleColor" color={"#ffffff"} width={'80%'} value={vehicleColor} onChangeText={e=>{setColor(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehiclePrice" color={"#ffffff"} width={'80%'} value={vehiclePrice} onChangeText={e=>{setPrice(e)}} />
         </Box>
    
    <Box alignItems={"center"}>
    <Button mt={10} size="md" variant="solid" colorScheme="success" width={'30%'} 
        onPress={vehicleFlatListOnPress}
      >
          Add Vehicle
        </Button>  
    </Box>
     

        </View>
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:"white"
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