import {Dimensions, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight
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
