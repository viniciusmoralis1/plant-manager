import React from 'react';
import {View, Text, Animated} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

interface PlantProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
    hour: string;
  };

  handleRemove: () => void;
}

export default function PlantCardSecondary({data, handleRemove, ...rest} : PlantProps) {
  return(
    <Swipeable overshootRight={false} 
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.removeButton} onPress={handleRemove}> 
              <Feather name='trash' size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.button} {...rest} >
        <SvgFromUri uri={data.photo} width={46} height={52} />
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às:</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
};