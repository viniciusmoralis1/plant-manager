import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 20
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 12
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  wateringImage: {
    width: 292,
    height: 284
  },

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
