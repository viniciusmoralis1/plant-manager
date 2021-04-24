import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

interface Params {
  title: string,
  subtitle: string;
  buttonTitle: string;
  nextScreen: string;
}


export function Confirmation(){
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, nextScreen } = routes.params as Params;

  function handleNavigate(){
    navigation.navigate(nextScreen);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          🤗
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button text={buttonTitle} onPress={handleNavigate} />
        </View>
      </View>
    </SafeAreaView>
  );
};