import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button, Switch, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await AsyncStorage.getItem('profile');
      if (data) {
        const p = JSON.parse(data);
        setName(p.name);
        setGender(p.gender);
        setNotify(p.notify);
      }
    };
    load();
  }, []);

  const save = async () => {
    if (!name || !gender) {
      Alert.alert('Fill everything!');
      return;
    }
    const profile = { name, gender, notify };
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
    Alert.alert('Saved!');
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <TextInput label="Name" value={name} onChangeText={setName} />
      <TextInput label="Comments" value={gender} onChangeText={setGender} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ marginRight: 10 }}>Toggle</Text>
        <Switch value={notify} onValueChange={setNotify} />
      </View>
      <Button mode="contained" onPress={save}>Save</Button>
    </View>
  );
}
