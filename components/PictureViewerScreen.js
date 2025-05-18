import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function PictureViewerScreen({ route, navigation }) {
  const { picture } = route.params || {};

  if (!picture) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text>No image selected.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>
      <Image source={picture.source} style={{ width: '100%', height: 300 }} />
      <Text>{picture.title}</Text>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </View>
  );
}
