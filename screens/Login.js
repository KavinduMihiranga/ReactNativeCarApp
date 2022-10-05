import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../components/LoginBtn'
import { NativeBaseProvider, Button, VStack, Box, Input, Icon } from 'native-base'
export default function Login({navigation}) {

  const [id,setId]=useState([]);
  const [name,setname]=useState([]);
  const [password,setPassword]=useState([]);

 

  useEffect(()=>{
    // fetch("http://localhost:7000/login/")
    // .then((res)=>res.json())
    // .then((json)=>console.log("Hello"+json))
  })

  const  registerButonOnPress=()=>{
    navigation.navigate('Register')
    console.log(name,password)
  }

  const  loginBtnOnPress=()=>{

    console.log("login Button press")

    fetch('http://localhost:7000/login', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: name,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));


      console.log(id,name,password)
      navigation.navigate('vehicleFlatList')
  }

  return (
    <NativeBaseProvider style={styles.context}>
      <View style={{backgroundColor:"#130f40",height:"100%"}}>
      <VStack space={15} alignItems="center">
      <Box width={'32'} height={'12'}  alignItems={"center"} justifyContent="center" mt={"16"}>
       <Text style={{color:"white" ,fontSize:34 , fontStyle:"italic", fontWeight:"600"}}>Login</Text>
      </Box>

      <Box mt={"12"}>

     
     

    <Input  variant="rounded" placeholder="Id" width={'80%'} value={id} color={"#ffffff"} onChangeText={e=>{setId(e)}}/>
    <Input mt={"1"} variant="rounded" placeholder="Username" width={'80%'} color={"#ffffff"} value={name} onChangeText={e=>{setname(e)}}/>
    <Input mt={"1"} variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} value={password} onChangeText={e=>{setPassword(e)}} />
     
      </Box>
    
      <Button mt={'1%'} size="md" variant="solid" colorScheme="success" width={'30%'} 
        onPress={loginBtnOnPress }
      >
          Login
        </Button> 
      <Button mt={'1%'} mb={'16'} size="md" variant="solid" colorScheme="primary" width={'30%'} 
        onPress={registerButonOnPress }
      >
          Register
        </Button>  

         
      </VStack>
      </View>
      
    </NativeBaseProvider>
  )
}

const styles=StyleSheet.create({
  context:{
    backgroundColor:"white"
  }
})