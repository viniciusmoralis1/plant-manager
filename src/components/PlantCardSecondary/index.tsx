import React from 'react';
import {View, Text} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import styles from './styles';

interface PlantProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export default function PlantCardSecondary({data, ...rest} : PlantProps) {
  return(
    <RectButton style={styles.button} {...rest} >
      <SvgFromUri uri={data.photo} width={46} height={52} />
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar às:</Text>
        <Text style={styles.time}>{data.hour}</Text>
      </View>
    </RectButton>
  );
};