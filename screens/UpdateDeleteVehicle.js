import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input, NativeBaseProvider, VStack,Button } from 'native-base'

export default function UpdateDeleteVehicle({navigation,route}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [uId, setuId] = useState('');

  useEffect(() => {
    console.log(route.params.obj);
    setTitle(route.params.obj.title);
    setBody(route.params.obj.body);
    setuId(route.params.obj.userId + '');
  });

  const updatePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: title,
        body: body,
        userId: uId,
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
     <VStack space={4} alignItems="center" mt={'15%'}>
        <Input
          mx={'3'}
          value={title}
          onChangeText={(e) => {
            setTitle(e);
          }}
          placeholder="Title"
          width="80%"
        />
        <Input
          mx={'3'}
          value={body}
          onChangeText={(e) => {
            setBody(e);
          }}
          placeholder="Body"
          width="80%"
        />
        <Input
          mx={'3'}
          value={uId}
          onChangeText={(e) => {
            setuId(e);
          }}
          placeholder="Uid"
          width="80%"
        />
        <Button
          mt={'20%'}
          size="md"
          variant="outline"
          colorScheme="warning"
          width={'80%'}
          onPress={updatePost}>
          Update Post
        </Button>
      </VStack>
    </NativeBaseProvider>
  )
}