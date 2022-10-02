import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../components/LoginBtn'
import { NativeBaseProvider, Button, VStack, Box, Input } from 'native-base'

export default function Login({navigation}) {

  const [username,setUsername]=useState([]);
  const [password,setPassword]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:7000/login")
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  const  loginBtnOnPress=()=>{
    navigation.navigate('Register')
    console.log(username,password)
  }

  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Box width={'16'} height={'12'} fontSize={'2xl'} fontFamily={'heading'} >
        Login
      </Box>
      <Input variant="rounded" placeholder="Username" width={'80%'} value={username} onChangeText={e=>{setUsername(e)}}/>
      <Input variant="rounded" placeholder="Password" width={'80%'} value={password} onChangeText={e=>{setPassword(e)}} />
     
      <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'80%'} 
        onPress={loginBtnOnPress }
      >
          Login
        </Button>   
      </VStack>
    </NativeBaseProvider>
  )
}