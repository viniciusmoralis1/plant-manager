import React from 'react';
import {View, Text, Image} from 'react-native';
import fonts from '../../styles/fonts';
import styles from './styles';

const Header: React.FC = () => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Olá,</Text>
        <Text style={[styles.text, styles.userName]}>Vinicius</Text>
      </View>

      <Image style={styles.avatar} source={{uri: 'https://avatars.githubusercontent.com/u/48500565?v=4'}} />
    </View>
  )
}

export default Header;