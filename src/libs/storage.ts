import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  },
  hour: string;
  dateTimeNotification: Date;
};

export interface StorePlantProps {
  [id: string]: {
    data: PlantProps;
  };
};

export async function savePlant(plant: PlantProps) : Promise<void>{
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StorePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    };

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({...newPlant, ...oldPlants}));
  }
  catch(e){
    throw new Error(e);
  };
};

export async function loadPlants() : Promise<PlantProps[]>{
  try{
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StorePlantProps) : {}

    const plantsSorted = Object
    .keys(plants)
    .map((key) => {
      return {
        ...plants[key].data,
        hour: format(new Date(plants[key].data.dateTimeNotification), 'HH:mm')
      };
    })
    .sort((a, b) => 
      Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 - Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    )

    return plantsSorted;
  } catch(e){
    throw new Error(e);
  };
};

export async function removePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantmanager:plants');
  const plants = data ? (JSON.parse(data) as StorePlantProps) : {};

  delete plants[id];

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants));
}