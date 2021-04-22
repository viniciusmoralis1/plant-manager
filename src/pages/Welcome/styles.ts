import {Dimensions, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight,
  },

  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 12,
    fontFamily: fonts.heading,
    lineHeight: 34
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 22,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  wateringImage: {
    height: Dimensions.get('window').width * 0.7
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 12,
    height: 56,
    width: 66,
  },

  iconRight: {
    fontSize: 32,
    color: colors.white
  }
});
