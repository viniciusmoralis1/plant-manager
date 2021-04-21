import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 12,
    height: 56,
    width: 76,
    paddingHorizontal: 10
  },

  buttonText: {
    fontSize: 16,
    color: colors.white
  }
});