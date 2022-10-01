import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, TextArea, Box, Button } from 'native-base'

export default function Vehicle({navigation}) {

  const vehicleFlatListOnPress=()=>{
    navigation.navigate("vehicleFlatList")
  }

  return (
    <NativeBaseProvider>
      <Text>Vehicle</Text>
      <Box alignItems="flex-start" w="50%">
        Upload Image
      </Box>
      <Box justifyItems={"right"} alignItems={"flex-end"} w={"40%"} height={"40%"} backgroundColor={"blue.100"}>

</Box>
      
      <Box alignItems="center" w="100%">
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
    </Box>
    
    <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'80%'} 
        onPress={vehicleFlatListOnPress}
      >
          Vehicles
        </Button>   
    
    </NativeBaseProvider>
  )
}