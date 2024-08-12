import { StyleSheet } from 'react-native';
import {
  height,
  horizontalScale,
  moderateScale,
  StaticColors,
  verticalScale,
} from '../../themes';

export const styleFun = () =>
  StyleSheet.create({
    rootContainerStyle: {
      flex: 1,
      backgroundColor: StaticColors.white,
    },

    rootContentContainer: {
      flexGrow: 1
    },

    animatedRootView: {
      flex: 1,
      justifyContent: 'center',
    },

    contentContainer: {
      alignItems: 'center',
      paddingHorizontal: horizontalScale(20),
      justifyContent: 'center',
    },

    logoContainer: {
      height: moderateScale(70),
      width: moderateScale(70),
      marginTop: verticalScale(60),
      marginBottom: verticalScale(40),
      alignSelf: 'flex-start',
    },

    logoImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },

    welcomeTextContainer: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      marginBottom: verticalScale(40),
      paddingHorizontal: horizontalScale(20),
    },

    wlcBackText: {
      fontSize: moderateScale(32),
      color: StaticColors.black,
      fontWeight: '700',
      textAlign: 'left',
      paddingHorizontal: horizontalScale(20)
    },

    logInToConText: {
      fontSize: moderateScale(16),
      color: StaticColors.black,
      textAlign: 'left',
      fontWeight: '500',
      marginTop: verticalScale(8),
      paddingHorizontal: horizontalScale(20)
    },

    forgetPassText: {
      fontSize: moderateScale(16),
      color: StaticColors.light40,
      textAlign: 'right',
      alignSelf: 'flex-end',
      marginEnd: horizontalScale(12),
      marginTop: verticalScale(4),
    },

    bottomContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: verticalScale(20),
    },

    customButtonStyle: {
      width: '87%',
      marginTop: verticalScale(30),
      shadowColor: StaticColors.black,
      shadowOffset: {
        height: verticalScale(10),
        width: horizontalScale(5),
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },

    newUserContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(25),
    },

    newUserText: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      marginStart: horizontalScale(8),
    },

    signUpText: {
      color: StaticColors.primary,
      fontSize: moderateScale(16),
      fontWeight: '500',
      marginStart: horizontalScale(8),
    },
    container: {
      position: 'absolute',
      flex: 1,
      height: '100%',
      width: '100%',
    },
    topPanel: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: height / 2,
      backgroundColor: 'green',
    },
    bottomPanel: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: height / 2,
      backgroundColor: 'green',
    },
    centralImage: {
      width: verticalScale(250),
      height: verticalScale(250),
      resizeMode: 'contain',
      marginTop: '80%',
      marginLeft: '15%',
    },
  });
