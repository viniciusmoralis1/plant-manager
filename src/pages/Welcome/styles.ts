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
});
