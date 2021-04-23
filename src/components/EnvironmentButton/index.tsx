import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import styles from './styles';

interface EnvironmentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;
}

export default function EnvironmentButton({title, active = false, ...rest} : EnvironmentButtonProps){
  return (
    <RectButton style={[styles.button, active && styles.activeButton]} {...rest}>
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </RectButton>
  )
};
