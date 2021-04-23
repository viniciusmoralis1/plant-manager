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

  header: {
    paddingHorizontal: 24
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.heading
  },

  subtitle: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 24
  },

  environmentList: {
    height: 54,
    alignItems: 'center',
    paddingLeft: 24,
    marginVertical: 16,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});