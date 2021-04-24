import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function Header(){
  const [name, setName] = useState<string>();

  useEffect(() => {
    async function getName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setName(user || '');
    }

    getName();
  }, [])

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Olá,</Text>
        <Text style={[styles.text, styles.userName]}>{name}</Text>
      </View>

      <Image style={styles.avatar} source={{uri: 'https://avatars.githubusercontent.com/u/48500565?v=4'}} />
    </View>
  )
};
