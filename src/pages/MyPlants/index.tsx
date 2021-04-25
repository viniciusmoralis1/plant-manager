import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Header from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { loadPlants, PlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import styles from './styles';
import waterdrop from '../../assets/waterdrop.png';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import Load from '../../components/Load';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextWatering, setNextWatering] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStored = await loadPlants();
      
      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatering(`Não esqueça de regar a ${plantsStored[0].name} à ${nextTime} horas.`);
      setMyPlants(plantsStored);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  if(loading){
    return <Load />
  }
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatering}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants} 
          keyExtractor={(item) => String(item.id)} 
          renderItem={({item}) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
};