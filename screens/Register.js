import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeBaseProvider, VStack, Box, Input, Button } from 'native-base'

export default function Register({navigation}) {
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const [phoneNo,setPhoneNo]=useState([]);
  const [password,setPassword]=useState([]);

  const  registerBtnOnPress=()=>{
    navigation.navigate('Vehicle')
    console.log(name,email,phoneNo,password)
  }

  useEffect(()=>{
    fetch('http://localhost:7000/register')
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems={"center"}>
      <Box width={'16'} height={'12'} fontSize={'2xl'} fontFamily={'heading'} >
        Register
      </Box>
      <Input variant="rounded" placeholder="Name" width={'80%'} value={name} onChangeText={e=>{setName(e)}}/>
      <Input variant="rounded" placeholder="Email" width={'80%'} value={email} onChangeText={e=>{setEmail(e)}}/>
      <Input variant="rounded" placeholder="PhoneNo" width={'80%'} value={phoneNo} onChangeText={e=>{setPhoneNo(e)}}/>
      <Input variant="rounded" placeholder="Password" width={'80%'} value={password} onChangeText={e=>{setPassword(e)}} />
     
      <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'80%'} 
        onPress={registerBtnOnPress }
      >
          Register
        </Button>  
      </VStack>
    </NativeBaseProvider>
  )
}