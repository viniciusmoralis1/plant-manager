import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

export function PlantSelect(){
  return(
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Teste</Text>
    </View>
  );
};