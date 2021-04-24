import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.shape,
  },

  plantInfo: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },

  plantName: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 16,
  },

  plantAbout: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 8,
  },

  controller: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 42
  },

  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 16,
    borderRadius: 26,
    position: 'relative',
    bottom: 92
  },

  tipImage: {
    width: 64,
    height: 64,
  },

  tipText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: fonts.text,
    color: colors.blue,
  },

  alertLabel: {
    fontSize: 14,
    fontFamily: fonts.complement,
    color: colors.heading,
    marginBottom: 8,
  }
});