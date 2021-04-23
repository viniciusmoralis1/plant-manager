import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  showDisabled?: boolean;
}

export default function Button({text, showDisabled, ...rest} : ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, showDisabled && styles.disable]} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
};