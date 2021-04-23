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
  const [selectedEnvironment, setSelectedEnvironment] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  function handleSelectedEnvironment(environment: string){
    setSelectedEnvironment(environment);

    if(environment == 'all')
      return setFilteredPlants(plants);
    else {
      const filtered = plants?.filter(plant => 
        plant.environments.includes(environment)
      )
      setFilteredPlants(filtered);
    }
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get('plants_environments?_sort=title');
      setEnvironments([{key: 'all', title: 'Todos'}, ...data]);
    };

    async function fetchPlants() {
      const {data} = await api.get('plants?_sort=name');
      setPlants(data);
      setFilteredPlants(data);
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
          <EnvironmentButton title={item.title} active={item.key === selectedEnvironment} onPress={() => handleSelectedEnvironment(item.key)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList data={filteredPlants} renderItem={({item}) => (
          <PlantCardPrimary data={item} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        />
      </View>


    </View>
  );
};