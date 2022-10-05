import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input, NativeBaseProvider, VStack,Button } from 'native-base'

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
    <NativeBaseProvider>

      <View style={{backgroundColor:"#130f40",height:"100%"}}>
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
       
        <Button
          mt={'20%'}
          size="md"
          variant="outline"
          colorScheme="primary"
          width={'30%'}
          onPress={updatePost}>
          Update 
        </Button>
        <Button
          mt={'2%'}
          size="md"
          variant="outline"
          colorScheme="warning"
          width={'30%'}
          onPress={deleteVehicle}>
          Delete
        </Button>
      </VStack>
      </View>
    
    </NativeBaseProvider>
  )
}