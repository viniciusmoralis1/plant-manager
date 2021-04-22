import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
  },

  text: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },

  userName: {
    fontFamily: fonts.heading,
    lineHeight: 38
  },

  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
});