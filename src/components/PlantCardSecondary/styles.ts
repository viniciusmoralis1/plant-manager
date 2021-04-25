import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 24,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 6
  },

  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 12,
    textAlign: 'center',
  },

  details: {
    alignItems: 'flex-end',
    marginRight: 4,
  },

  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },

  time: {
    marginTop: 6,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },

  removeButton: {
    width: 110,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 10,
    paddingLeft: 10
  },
})