import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    height: 38,
    width: 68,
    backgroundColor: colors.shape,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  activeButton: {
    backgroundColor: colors.green_light
  },

  text: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
  },

  activeText: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  },
});