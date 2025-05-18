import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const pictures = [
  { id: '1', title: 'Trees', source: require('../assets/sample1.jpg') },
  { id: '2', title: 'Mountain', source: require('../assets/sample2.jpg') },
];

export default function GalleryScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: colors.background }}>
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Viewer', { picture: item })}>
            <Image source={item.source} style={{ height: 100, marginBottom: 10 }} />
            <Text style={{ color: colors.text }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
