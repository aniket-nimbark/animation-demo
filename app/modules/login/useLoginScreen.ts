
import { RefObject, useEffect, useRef, useState } from 'react';
import { Alert, Keyboard, TextInput } from 'react-native';
import { styleFun } from './LoginScreenStyle';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import LogInSchema from '../../utils/validation-schema/loginSchema';
import { Routes } from '../../constants';
import { UserFormType } from '../../types';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
  runOnJS,
  withSpring,
} from 'react-native-reanimated';
import { globalMetrics, height, horizontalScale, StaticColors, verticalScale, width } from '../../themes';


const useLoginScreen = () => {
  const styles = styleFun()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const passwordRef = useRef<TextInput>(null);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isloading, setIsLoading] = useState<boolean>(false);

  // Animation Values
  const topPanelTranslateY = useSharedValue<number>(-height / 2);
  const bottomPanelTranslateY = useSharedValue<number>(height / 2);
  const imageOpacity = useSharedValue<number>(0);
  const imageRotation = useSharedValue<number>(90);
  const imageTranslateX = useSharedValue<number>(0);
  const imageTranslateY = useSharedValue<number>(0);
  const imageScale = useSharedValue<number>(1);
  const backgroundColorValue = useSharedValue<number>(0);
  const mainBackGroundColor = useSharedValue<number>(0);
  const contentOpacity = useSharedValue<number>(0);
  const textTranslateY = useSharedValue(-50);
  const textOpacity = useSharedValue(0);

  // Formik hook for form handling
  const { handleChange, setFieldTouched, touched, errors, handleSubmit } =
    useFormik<UserFormType>({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LogInSchema,
      onSubmit: values => logInHandler(values),
    });

  // Function to handle login submission
  const logInHandler = async (values: UserFormType) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setIsLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: Routes.home }],
        });
      }, 5000);
    } catch (e) {
      setIsLoading(false);
      Alert.alert('Sorry', 'Something went wrong!');
    }
  };

  // Function to focus on the next TextInput
  const goToPassword = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };


  // Effect to animate UI elements when the component mounts
  useEffect(() => {
    topPanelTranslateY.value = withTiming(0, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });

    bottomPanelTranslateY.value = withTiming(0, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });

    setTimeout(() => {
      imageOpacity.value = withTiming(1, {
        duration: 600,
      });

      imageRotation.value = withTiming(
        0,
        {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
        },
        () => {
          runOnJS(() => {
            backgroundColorValue.value = withTiming(1, {
              duration: 600,
              easing: Easing.inOut(Easing.ease),
            });
          });
        },
      );

      imageScale.value = withTiming(0.4, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });

      backgroundColorValue.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
    }, 700);
    setTimeout(() => {
      imageTranslateX.value = withTiming(
        -width / 2 + (globalMetrics.isAndroid ? width * 0.13 : width * 0.12),
        {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
        },
      );
      imageTranslateY.value = withTiming(
        -height / 2 + (globalMetrics.isAndroid ? height * 0.15 : height * 0.18),
        {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
        },
      );
      imageScale.value = withTiming(0.2, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
      backgroundColorValue.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
      mainBackGroundColor.value = withTiming(1, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      });
      contentOpacity.value = withTiming(1, {
        duration: 2000,
      });

      textTranslateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
      textOpacity.value = withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
    }, 1300);

  }, []);


  // Effect to adjust UI when keyboard shows or hides Android-specific
  useEffect(() => {
    const keyboardDidShow = () => {
      if (globalMetrics.isAndroid) {
        imageTranslateY.value = withTiming(imageTranslateY.value - verticalScale(150), {
          duration: 0
        });
      }
    }

    const keyboardDidHide = () => {
      if (globalMetrics.isAndroid) {
        imageTranslateY.value = withTiming(imageTranslateY.value + verticalScale(150), {
          duration: 0
        });
      }
    };

    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, [globalMetrics.isAndroid]);

  const topPanelStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: topPanelTranslateY.value }],
    };
  });

  const bottomPanelStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bottomPanelTranslateY.value }],
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: imageOpacity.value,
      transform: [
        { rotate: `${imageRotation.value}deg` },
        { translateX: imageTranslateX.value },
        { translateY: imageTranslateY.value },
        { scale: imageScale.value },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: textTranslateY.value }],
      opacity: textOpacity.value,
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundColorValue.value,
        [0, 1],
        [StaticColors.white, StaticColors.white],
      ),
    };
  });

  const mainBackgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        mainBackGroundColor.value,
        [0, 1],
        [StaticColors.green, StaticColors.white],
      ),
    };
  });

  const contentOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
    };
  });


  return {
    textOpacity,
    textTranslateY,
    styles,
    passwordRef,
    goToPassword,
    secureTextEntry, setSecureTextEntry,
    isloading, setIsLoading,
    handleSubmit,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    backgroundColorStyle,
    topPanelStyle,
    mainBackgroundColorStyle,
    bottomPanelStyle,
    imageStyle,
    contentOpacityStyle,
    textStyle,
    imageTranslateY
  };
};

export default useLoginScreen;