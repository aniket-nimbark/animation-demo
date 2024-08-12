import {View} from 'react-native';
import React from 'react';
import useLoginScreen from './useLoginScreen';
import {AppText, CustomButton, CustomTextInput} from '../../components';
import {Images} from '../../assets';
import {loginScreenStrings, Routes} from '../../constants';
import Animated from 'react-native-reanimated';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen: React.FC = () => {
  // Destructuring values and functions from the custom hook
  const {
    styles,
    passwordRef,
    goToPassword,
    errors,
    touched,
    setFieldTouched,
    handleChange,
    isloading,
    secureTextEntry,
    handleSubmit,
    setSecureTextEntry,
    backgroundColorStyle,
    topPanelStyle,
    mainBackgroundColorStyle,
    bottomPanelStyle,
    imageStyle,
    contentOpacityStyle,
    textStyle,
  } = useLoginScreen();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.rootContentContainer}
      style={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.rootContainerStyle} testID={Routes.login}>
        <Animated.View style={[styles.container, backgroundColorStyle]}>
          <Animated.View
            style={[styles.topPanel, topPanelStyle, mainBackgroundColorStyle]}
          />
          <Animated.View
            style={[
              styles.bottomPanel,
              bottomPanelStyle,
              mainBackgroundColorStyle,
            ]}
          />
          <Animated.Image
            source={Images.logo}
            style={[styles.centralImage, imageStyle]}
          />
        </Animated.View>
        <Animated.View style={[styles.animatedRootView, contentOpacityStyle]}>
          <Animated.View style={textStyle}>
            <AppText style={styles.wlcBackText}>
              {loginScreenStrings.wlcBack}
            </AppText>
          </Animated.View>
          <Animated.View style={textStyle}>
            <AppText style={styles.logInToConText}>
              {loginScreenStrings.loginToCon}
            </AppText>
          </Animated.View>
          <CustomTextInput
            testID="emailInput"
            placeholder="Email"
            onSubmitEditing={() => goToPassword(passwordRef)}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            error={errors?.email as string}
            touched={touched?.email as boolean}
            secureTextEntry={false}
          />
          <CustomTextInput
            testID="passwordInput"
            placeholder="Password"
            ref={passwordRef}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            error={errors?.password as string}
            touched={touched?.password as boolean}
            secureTextEntry={secureTextEntry}
            setSecureEntryText={setSecureTextEntry}
          />
          <AppText style={styles.forgetPassText}>
            {loginScreenStrings.forgotPass}
          </AppText>
          <View style={styles.bottomContainer}>
            <CustomButton
              testID={'loginButton'}
              title={loginScreenStrings.loginBtn}
              customStyle={styles.customButtonStyle}
              loading={isloading}
              disabled={isloading}
              onPress={() => handleSubmit()}
            />
            <View style={styles.newUserContainer}>
              <AppText style={styles.newUserText}>
                {loginScreenStrings.newUser}
              </AppText>
              <AppText style={styles.signUpText}>
                {loginScreenStrings.signUp}
              </AppText>
            </View>
          </View>
        </Animated.View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
