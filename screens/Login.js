import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../components/LoginBtn'
import { NativeBaseProvider, Button, VStack, Box, Input, Icon, ScrollView } from 'native-base'
import axios from 'axios';
import loginService from '../services/loginService';
const baseUrl='http://localhost:7000/login';

export default function Login({navigation}) {

  const [id,setId]=useState([]);
  const [name,setname]=useState([]);
  const [password,setPassword]=useState([]);

 

  useEffect(()=>{
    fetch("http://localhost:7000/login")
    .then((res)=>res.json())
    .then((json)=>setId(json))
    .then((json)=>setname(json))
    .then((json)=>setPassword(json))
  })

  const  registerButonOnPress=()=>{
    navigation.navigate('Register')
    console.log(name,password)
  }

  const  loginBtnOnPress=async(event)=>{
    console.log(id,name,password)
    navigation.navigate('vehicleFlatList')

    event.preventDefault();

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

   
    // try {
    //   const resp=await axios.post(baseUrl, {id:id,name:name,password:password});
    //   console.log(resp.data)
    // } catch (error) {
    //   console.log(error.response.message)
    // }

  
  // if (this.state.btnLabel === "Save") {
      // const data=[id,name,password]
      // let res = await loginService.postLogin(data);
      // console.log(res);

      // if (res.status === 200) {
      //     this.setState({
      //         alert: true,
      //         message: res.data.message,
      //         severity: "success"
      //     });
      //     // this.clearFields();
      //     // this.loadData();
      // } else {
      //     this.setState({
      //         alert: true,
      //         message: res.response.data.message,
      //         severity: "error"
      //     });
      // }

  }

  return (
    <NativeBaseProvider style={styles.context}>

     
      <View style={{backgroundColor:"#130f40",height:"100%"}}>
      <Box style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.imgflip.com/6e6bpc.gif',
        }}
      />
  </Box>
  <ScrollView h="380">
      <VStack space={1} alignItems="center">
      <Box width={'32'} height={'12'}  alignItems={"center"} justifyContent="center" mt={"5"}>
       <Text style={{color:"white" ,fontSize:34 , fontWeight:"bold"}}>Login</Text>
      </Box>

      <Box mt={"5"}>

     
     

    <Input  variant="rounded" placeholder="Id" width={'80%'} value={id} color={"#ffffff"} onChangeText={e=>{setId(e)}}/>
    <Input mt={"1"} variant="rounded" placeholder="Username" width={'80%'} color={"#ffffff"} value={name} onChangeText={e=>{setname(e)}}/>
    <Input mt={"1"} variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} value={password} onChangeText={e=>{setPassword(e)}} />
     
      </Box>

      <Button.Group isAttached mx={{
        base:"auto",
        md:0
      }}size='md' borderRadius={100}>
        <Button colorScheme={"blue"} width={'32'}  onPress={loginBtnOnPress }>Login</Button>
        <Button width={'32'} onPress={registerButonOnPress }>  Register</Button>

      </Button.Group>
  
         
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
    flex: 12,
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