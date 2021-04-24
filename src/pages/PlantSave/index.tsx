import React from 'react';
import {
  View,
  Alert,
  Text,
  Image,
  ScrollView,
  Platform
} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import styles from './styles';

import waterdrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import { useRoute } from '@react-navigation/core';

interface Params {
  plant: {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
  }
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          width={160}
          height={180}
        />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage}/>
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>

        <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado.</Text>

        <Button text="Cadastrar planta" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};