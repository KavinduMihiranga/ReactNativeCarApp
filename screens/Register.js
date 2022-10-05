import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeBaseProvider, VStack, Box, Input, Button } from 'native-base'

export default function Register({navigation}) {
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const [phoneNo,setPhoneNo]=useState([]);
  const [password,setPassword]=useState([]);

  const  registerBtnOnPress=()=>{
    navigation.navigate('vehicle')
    console.log(name,email,phoneNo,password)
  }

  useEffect(()=>{
    fetch('http://localhost:8080/CarMobileAppSpring_war/api/v1/user')
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  return (
    <NativeBaseProvider >
      <View style={{backgroundColor:"#130f40" , height:"100%"}}>
      <VStack space={4} alignItems={"center"} >
      <Box width={'32'} height={'12'} alignItems={"center"} justifyItems={"center"} mt={16}>
        <Text style={{color:"#ffffff", fontSize:30, fontWeight:"bold"}}> Register</Text>
      </Box>
      <Input variant="rounded" placeholder="Name" width={'80%'} color={"#ffffff"} value={name} onChangeText={e=>{setName(e)}}/>
      <Input variant="rounded" placeholder="Email" width={'80%'}color={"#ffffff"} value={email} onChangeText={e=>{setEmail(e)}}/>
      <Input variant="rounded" placeholder="PhoneNo" width={'80%'}color={"#ffffff"} value={phoneNo} onChangeText={e=>{setPhoneNo(e)}}/>
      <Input variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} value={password} onChangeText={e=>{setPassword(e)}} />
     
      <Button mt={'10%'} size="md" variant="solid" colorScheme="success" width={'30%'} 
        onPress={registerBtnOnPress }
      >
          Register
        </Button>  
      </VStack>
      </View>
      
    </NativeBaseProvider>
  )
}