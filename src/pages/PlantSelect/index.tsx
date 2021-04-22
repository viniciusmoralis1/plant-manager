import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

export function PlantSelect(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
    </View>
  );
};