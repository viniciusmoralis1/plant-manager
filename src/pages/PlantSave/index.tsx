import React, { useState } from 'react';
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
import { useRoute } from '@react-navigation/core';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import Button from '../../components/Button';
import styles from './styles';
import waterdrop from '../../assets/waterdrop.png';

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
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(!showDatePicker);
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedTime(new Date());
      return Alert.alert('Escolha algum horário no futuro! 🕐');
    }

    if(dateTime){
      setSelectedTime(dateTime);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          width={160}
          height={170}
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

        { showDatePicker && (
          <DateTimePicker value={selectedTime} mode="time" display="spinner" onChange={handleChangeTime} />
        )}

        { Platform.OS === 'android' && (
          <TouchableOpacity style={styles.showDatePickerButton} onPress={() => setShowDatePicker(!showDatePicker)}>
            <Text style={styles.dateTimePickerText}>Alterar o horário</Text>
            <Text style={styles.dateTimePickerSelectedText}>{format(selectedTime, 'HH:mm')}</Text>
          </TouchableOpacity>
        )}

        <Button text="Cadastrar planta" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};