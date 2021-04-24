import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 50,
    backgroundColor: colors.background,
  },

  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 22,
    borderRadius: 25,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },

  spotlightImage: {
    width: 64,
    height: 64,
  },
  
  spotlightText: {
    flex: 1,
    fontFamily: fonts.heading,
    color: colors.body_dark,
    paddingHorizontal: 20,
  },

  plants: {
    flex: 1,
    width: '100%',
  },
  
  plantsTitle: {
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 6,
  }
  
})