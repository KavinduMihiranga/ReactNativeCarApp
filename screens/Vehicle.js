import { View, Text,StyleSheet,ImageBackground,FlatList,Image ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, TextArea, Box, Button, Input } from 'native-base'
import { border } from 'native-base/lib/typescript/theme/styled-system';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function Vehicle({navigation}) {
  const [imageUri,setImageuri]=useState('');

  const [id,setId]=useState([]);
  const [brand,setBrand]=useState([]);
  const [model,setModel]=useState([]);
  const [color,setColor]=useState([]);
  const [price,setPrice]=useState([]);


  const vehicleFlatListOnPress=()=>{


    fetch('http://localhost:7000/vehicle', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        brand:brand,
        model: model,
        color: color,
        price: price,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));



    navigation.navigate("vehicleFlatList")
    console.log(id,brand,model,color,price)
  }

  useEffect(()=>{
    fetch('http://localhost:7000/vehicle')
    .then((res)=>res.json())
    .then((json)=>setUsername(json))
  })

  const openCamera=()=>{
    const options={
        storageOption:{
          path:"images",
          mediaType:"photo"

        },
        includeBase64:true,
    };
    launchCamera(options,response=>{
      console.log('Response =',response);
      if(response.didCancel){
          console.log('user canceled Image picker')
      }else if(response.error){
        console.log('Image picker errror: ',response.error);
      }else if(response.customButton){
        console.log('user image custom button: ',response.customButton);
      }else{
        //you can also display using data;
        const source={uri:'data:image/jpg;base64,' + response.base64};
        setImageuri(source)
      }
    });
  }

  const openGallery=()=>{

    const options={
      storageOption:{
        path:'images',
        mediaType:'photo',
      },
      includeBase64:true,
    };
    launchImageLibrary(options,response=>{
      console.log('Response =',response);
      if(response.didCancel){
          console.log('user canceled Image picker')
      }else if(response.error){
        console.log('Image picker errror: ',response.error);
      }else if(response.customButton){
        console.log('user image custom button: ',response.customButton);
      }else{
        //you can also display using data;
        const source ={uri:'data:image/jpg:base64,' + response.base64};
        setImageuri(source)
      }
    });
  }

  return (
    <NativeBaseProvider  style={styles.container}>

  <View style={{flex:4, backgroundColor:"#130f40"}} >
  
      <Box style={{flex:5,width:"100%" ,flexDirection:"row", alignItems:"flex-start"}}>
        <Box style={{height:"30%",width:"80%",flex:8}}>
          <Text style={{fontSize:30, color:"#ffffff",fontWeight:"bold",mt:"12"}}> Vehicle </Text>
         
        </Box>  

        <Image source={{ uri: 'https://i.imgflip.com/6e6bpc.gif'}} resizeMode="cover" style={styles.image}>
     
      </Image>
     
      </Box>  
     
      </View>
      
      <View style={{flex:10 , backgroundColor:"#130f40"}}>
        <ScrollView  h="180">
      <Box alignItems="center" w="100%" mb={5}>
      <Input variant="rounded" placeholder="vid" width={'80%'}color={"#ffffff"} value={id} onChangeText={e=>{setId(e)}}/>
      <Input mt={1} variant="rounded" placeholder="vehicleBrand" color={"#ffffff"}  width={'80%'} value={brand} onChangeText={e=>{setBrand(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleModel" color={"#ffffff"} width={'80%'} value={model} onChangeText={e=>{setModel(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehicleColor" color={"#ffffff"} width={'80%'} value={color} onChangeText={e=>{setColor(e)}} />
      <Input mt={1} variant="rounded" placeholder="vehiclePrice" color={"#ffffff"} width={'80%'} value={price} onChangeText={e=>{setPrice(e)}} />
         </Box>
    
    <Box alignItems={"center"}>

      

    <Button.Group isAttached mx={{
        base:"auto",
        md:0
      }}size='md' borderRadius={100}>
        <Button colorScheme={"blue"} width={'20'}  onPress={openCamera}>Camera</Button>
        <Button width={'20'} onPress={openGallery }>Gallery</Button>

      </Button.Group>
  

    <Button mt={5} size="md" variant="solid" colorScheme="success" width={'60%'} borderRadius="3xl"
        onPress={vehicleFlatListOnPress}
      >
          Add Vehicle
        </Button>  


    </Box>
    </ScrollView>

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