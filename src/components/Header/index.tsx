import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Olá,</Text>
        <Text style={[styles.text, styles.userName]}>Vinicius</Text>
      </View>

      <Image style={styles.avatar} source={{uri: 'https://avatars.githubusercontent.com/u/48500565?v=4'}} />
    </View>
  )
};
