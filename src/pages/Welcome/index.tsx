import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import wateringImage from '../../assets/watering.png';

export function Welcome(){
  const navigation = useNavigation();

  function handleNavigation(){
    navigation.navigate('Identification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image
        source={wateringImage} 
        style={styles.wateringImage}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Feather name={'chevron-right'} style={styles.iconRight} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
