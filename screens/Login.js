import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../components/LoginBtn'
import { NativeBaseProvider, Button, VStack, Box, Input, Icon } from 'native-base'
export default function Login({navigation}) {

  const [username,setUsername]=useState([]);
  const [password,setPassword]=useState([]);

 

  useEffect(()=>{
    fetch("http://localhost:8080/CarMobileAppSpring_war/api/v1/login")
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  const  registerButonOnPress=()=>{
    navigation.navigate('Register')
    console.log(username,password)
  }

  const  loginBtnOnPress=()=>{
    navigation.navigate('vehicleFlatList')
    console.log("login Button press")
    fetch('http://localhost:8080/CarMobileAppSpring_war/api/v1/login', {
      method: 'post',
      body: JSON.stringify({
        lid:1,
        loginUserName: username,
        loginPassword: password
        
       
      }),
      
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
   
      .then(response => response.json())
      .then(json => console.log(json));
  }

  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
      <Box width={'32'} height={'12'}  alignItems={"center"} justifyContent="center" mt={"16"}>
       <Text style={{color:"#192a56" ,fontSize:34 , fontStyle:"italic", fontWeight:"600"}}>Login</Text>
      </Box>

      <Box mt={"12"}>

     
     

    <Input  variant="rounded" placeholder="Username" width={'80%'} value={username} onChangeText={e=>{setUsername(e)}}/>
      <Input mt={"1"} variant="rounded" placeholder="Password" width={'80%'} value={password} onChangeText={e=>{setPassword(e)}} />
     
      </Box>
    
      <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'30%'} 
        onPress={loginBtnOnPress }
      >
          Login
        </Button> 
      <Button mt={'2%'} size="md" variant="outline" colorScheme="primary" width={'30%'} 
        onPress={registerButonOnPress }
      >
          Register
        </Button>  

         
      </VStack>
    </NativeBaseProvider>
  )
}