import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  text: {
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.green_dark,
    marginVertical: 12,
    textAlign: 'center',
  },
})