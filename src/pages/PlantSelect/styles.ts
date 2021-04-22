import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: Constants.statusBarHeight
  },

  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    color: colors.heading
  },
});