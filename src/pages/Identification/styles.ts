import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight
  },

  content: {
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48
  },

  emoji: {
    fontSize: 36
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 16,
  },

  nameInput: {
    fontSize: 18,
    borderColor: colors.gray,
    color: colors.heading,
    borderBottomWidth: 1.5,
    width: '100%',
    marginTop: 48,
    padding: 4,
    textAlign: 'center',
  },

  inputFocus: {
    borderColor: colors.green
  },

  footer: {
    marginTop: 48,
    width: '100%',
    paddingHorizontal: 24
  }
})