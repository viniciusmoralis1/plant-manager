import React from 'react';
import {
  View,
  Alert,
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import styles from './styles';

import waterdrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

export function PlantSave() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri=""
          width={160}
          height={220}
        />
        <Text style={styles.plantName}>teste</Text>
        <Text style={styles.plantAbout}>teste</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage}/>
          <Text style={styles.tipText}>teste</Text>
        </View>

        <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado.</Text>

        <Button text="Cadastrar planta" onPress={() => {}} />

      </View>

    </ScrollView>
  );
};