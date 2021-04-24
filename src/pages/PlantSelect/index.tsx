import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import api from '../../services/api';
import styles from './styles';
import colors from '../../styles/colors';

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
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  const navigation = useNavigation();

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
  };

  async function fetchPlants() {
    const {data} = await api.get(`plants?_sort=name&_page=${page}&_limit=8`);

    if(!data)
      return setLoadMore(false);

    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadMore(false);
  };

  function handleFetchMore(distance: number){
    if(distance < 1)
      return
    else {
      setLoadMore(true);
      setPage(page + 1);
      fetchPlants();
    }
  };

  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get('plants_environments?_sort=title');
      setEnvironments([{key: 'all', title: 'Todos'}, ...data]);
    };

    fetchEnvironment();
    fetchPlants();
  }, []);

  function navigateToPlantSave(plant: PlantProps){
    navigation.navigate('PlantSave', {plant});
  };

  if (loading)
    return <Load />
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList 
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({item}) => (
            <EnvironmentButton title={item.title} active={item.key === selectedEnvironment} onPress={() => handleSelectedEnvironment(item.key)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList 
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <PlantCardPrimary data={item} onPress={() => navigateToPlantSave(item)} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadMore ?
              <ActivityIndicator color={colors.green_dark} />
            : <></>
          }
        />
      </View>


    </View>
  );
};