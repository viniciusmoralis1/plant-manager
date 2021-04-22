import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28
  },

  emoji: {
    fontSize: 80,
  },

  title: {
    fontSize: 22,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginTop: 16
  },
  
  subtitle: {
    fontSize: 18,
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 20,
    textAlign: 'center'
  },
  footer: {
    width: '100%',
    paddingHorizontal: 60,
    marginTop: 16,
  },
});