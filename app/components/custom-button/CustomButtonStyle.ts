import { StyleSheet } from 'react-native';
import { StaticColors, moderateScale, verticalScale } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(10),
    backgroundColor: StaticColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lable: {
    color: StaticColors.white,
    fontSize: moderateScale(18),
    paddingVertical: verticalScale(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  ActivityIndicatorStyle: {
    paddingVertical: verticalScale(16),
  },
});
