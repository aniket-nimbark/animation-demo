import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  StaticColors,
  verticalScale,
} from '../../themes';

export const styleFun = () =>
  StyleSheet.create({
    inputTextViewStyle: {
      marginHorizontal: horizontalScale(10),
      marginVertical: verticalScale(10),
    },
    inputViewStyle: {
      borderBottomWidth: moderateScale(1),
      borderColor: StaticColors.light40,
      borderRadius: moderateScale(16),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputStyle: {
      flex: 1,
      color: StaticColors.black,
      paddingVertical: verticalScale(15),
      paddingHorizontal: horizontalScale(12),
    },
    errorTextStyle: {
      marginTop: verticalScale(5),
      fontSize: moderateScale(13),
      marginHorizontal: horizontalScale(10),
      color: StaticColors.red,
    },
    eyeImageViewStyle: {
      height: verticalScale(18),
      width: horizontalScale(18),
      marginRight: horizontalScale(10),
    },
    eyeImageStyle: {
      width: '100%',
      height: '100%',
      tintColor: StaticColors.black,
    },
  });
