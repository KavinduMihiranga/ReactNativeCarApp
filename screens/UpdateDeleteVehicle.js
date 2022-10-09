import { View, Text ,Image,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input, NativeBaseProvider, VStack,Button, ScrollView,Box} from 'native-base'

export default function UpdateDeleteVehicle({navigation,route}) {
  const [id, setId] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    console.log(route.params.obj);
    setId(route.params.obj.id_);
    setManufacturer(route.params.obj.manufacturer);
    setModel(route.params.obj.model);
    setYear(route.params.obj.year);
  });

  const deleteVehicle=()=>{
    fetch("http://localhost:7000/vehicle/63381ca3964c1034dd081bce", {
  method: 'DELETE',
  
});
console.log("Delete Function")
  }

  const updatePost = () => {
    fetch('https://fake-vehicles-api.herokuapp.com/api/101', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        manufacturer: manufacturer,
        model: model,
        year: year,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
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
        <ScrollView>

     
      <VStack space={4} alignItems="center" mt={'15%'}>
        <Input
          mx={'3'}
          value={id}
          color={"#ffff"}
          onChangeText={(e) => {
            setId(e);
          }}
          placeholder="Id"
          width="80%"
        />
        <Input
          mx={'3'}
          value={manufacturer}
          color={"#ffff"}
          onChangeText={(e) => {
            setManufacturer(e);
          }}
          placeholder="Manufacturer"
          width="80%"
        />
        <Input
          mx={'3'}
          value={model}
          color={"#ffff"}
          onChangeText={(e) => {
            setModel(e);
          }}
          placeholder="Model"
          width="80%"
        />
        <Input
          mx={'3'}
          value={year}
          color={"#ffff"}
          onChangeText={(e) => {
            setYear(e);
          }}
          placeholder="Year"
          width="80%"
        />
       
       <Button.Group isAttached mx={{
        base:"auto",
        md:0
      }}size='md' borderRadius={100}>
        <Button colorScheme={"blue"} width={'32'}  onPress={updatePost }>Update</Button>
        <Button width={'32'} onPress={deleteVehicle }>  Delete</Button>

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