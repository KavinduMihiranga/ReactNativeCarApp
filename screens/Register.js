import { View, Text ,Image,StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeBaseProvider, VStack, Box, Input, Button,ScrollView } from 'native-base'

const baseUrl='http://localhost:7000/Register';

export default function Register({navigation}) {
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const [phoneNo,setPhoneNo]=useState([]);
  const [password,setPassword]=useState([]);

  const  registerBtnOnPress=async()=>{
    navigation.navigate('vehicle')
    console.log(name,email,phoneNo,password)

    // try {
    //   const resp=await axios.post(baseUrl, {name:name,email:email,phoneNo:phoneNo,password:password});
    //   console.log(resp.data)
    // } catch (error) {
    //   console.log("error.response")
    // }

    console.log("login Button press")

    fetch('http://localhost:7000/Register', {
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


  }

  useEffect(()=>{
    fetch('http://localhost:7000/Register')
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
    .then((json)=>setEmail(json))
    .then((json)=>setPhoneNo(json))
    .then((json)=>setPassword(json))
  })

  return (
    <NativeBaseProvider  style={styles.context} >
      <View style={{backgroundColor:"#130f40" , height:"100%"}}>

      <Box style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.tenor.com/bu0w-cRvyU8AAAAC/welcome.gif',
        }}
      />
  </Box>
  <ScrollView height="96">
      <VStack space={3} alignItems={"center"} >
      <Box width={'32'} height={'12'} alignItems={"center"} justifyItems={"center"} mt={5}>
        <Text style={{color:"#ffffff", fontSize:30, fontWeight:"bold"}}> Register</Text>
      </Box>
      <Input variant="rounded" placeholder="Name" width={'80%'} color={"#ffffff"} value={name} onChangeText={e=>{setName(e)}}/>
      <Input variant="rounded" placeholder="Email" width={'80%'}color={"#ffffff"} value={email} onChangeText={e=>{setEmail(e)}}/>
      <Input variant="rounded" placeholder="PhoneNo" width={'80%'}color={"#ffffff"} value={phoneNo} onChangeText={e=>{setPhoneNo(e)}}/>
      <Input variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} value={password} onChangeText={e=>{setPassword(e)}} />
     
      <Button mt={'3'} size="md" variant="solid" colorScheme="success" width={'60%'} borderRadius={100}
        onPress={registerBtnOnPress }
      >
          Register
        </Button>  
      </VStack>
      </ScrollView>
      </View>
      
    </NativeBaseProvider>
  )
}


const styles=StyleSheet.create({
  context:{
    backgroundColor:"white"
  },
  container: {
    flex: 5,

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0"
  }
})