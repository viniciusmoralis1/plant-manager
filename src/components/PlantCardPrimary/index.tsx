import React from 'react';
import {Text} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import styles from './styles';

interface PlantProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
  }
}

export default function PlantCardPrimary({data, ...rest} : PlantProps) {
  return(
    <RectButton style={styles.button} {...rest} >
      <SvgFromUri uri={data.photo} width={66} height={72} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
};