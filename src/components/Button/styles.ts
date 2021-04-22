import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },

  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },

  disable: {
    backgroundColor: colors.green_light
  }
});