import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

interface ButtonProps {
  text: string
}

export function Button({text} : ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
};