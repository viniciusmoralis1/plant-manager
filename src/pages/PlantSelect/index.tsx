import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import Header from '../../components/Header';
import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import styles from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
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

export function PlantSelect(){
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>();

  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get('plants_environments');
      setEnvironments([{key: 'all', title: 'Todos'}, ...data]);
    };

    async function fetchPlants() {
      const {data} = await api.get('plants');
      setPlants(data);
    };

    fetchEnvironment();
    fetchPlants();
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList data={environments} renderItem={({item}) => (
          <EnvironmentButton title={item.title} />
        )} 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList data={plants} renderItem={({item}) => (
          <PlantCardPrimary data={item} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        />
      </View>


    </View>
  );
};