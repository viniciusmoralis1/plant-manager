import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList
} from 'react-native';
import Header from '../../components/Header';
import { loadPlants, PlantProps, removePlant } from '../../libs/storage';
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

  function handleRemove(plant: PlantProps){
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 😄',
        style: 'cancel'
      },
      {
        text: 'Sim 😥',
        onPress: async() => {
          try {
            await removePlant(String(plant.id));

            setMyPlants((oldData) => (
              oldData.filter((item) => item.id !== plant.id)
            ));
          } catch(e) {
            Alert.alert('Não foi possível remover!');
          }
        },
        style: 'default',
      }
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStored = await loadPlants();

      if(plantsStored?.length > 0){
        const nextTime = formatDistance(
          new Date(plantsStored[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: pt }
        )
  
        setNextWatering(`Não esqueça de regar a ${plantsStored[0].name} à ${nextTime}.`);
        setMyPlants(plantsStored);
      } else {
        setNextWatering('Para ser lembrado quando deve regar sua plantinha primeiro cadastre ela!');
      }
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

        { myPlants?.length > 0 ? (
          <FlatList
            data={myPlants} 
            keyExtractor={(item) => String(item.id)} 
            renderItem={({item}) => (
              <PlantCardSecondary data={item} handleRemove={() => handleRemove(item)} />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noPlantsText}>
            Não há plantas cadastradas ainda!
          </Text>
        )}
      </View>

    </View>
  );
};