import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../LoginScreen';
import {loginScreenStrings, Routes} from '../../../constants';

jest.mock('../useLoginScreen.ts', () => ({
  __esModule: true,
  default: () => ({
    styles: {},
    passwordRef: {current: null},
    goToPassword: jest.fn(),
    secureTextEntry: true,
    setSecureTextEntry: jest.fn(),
    isloading: false,
    handleSubmit: jest.fn(),
    errors: {},
    touched: {},
    setFieldTouched: jest.fn(),
    handleChange: jest.fn(),
  }),
}));

// jest.mock('react-native-reanimated', () => {
//   const actualReanimated = jest.requireActual('react-native-reanimated');

//   return {
//     ...actualReanimated,
//     useSharedValue: jest.fn(() => ({
//       value: 0,
//     })),
//     useAnimatedStyle: jest.fn(() => ({})),
//     withTiming: jest.fn(),
//     interpolateColor: jest.fn(),
//     runOnJS: jest.fn(fn => fn),
//     Easing: {
//       inOut: jest.fn(),
//       ease: jest.fn(),
//     },
//   };
// });

describe(Routes.login, () => {
  test('renders correctly', () => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    );

    expect(screen.getByTestId(Routes.login)).toBeTruthy();
    expect(screen.getByPlaceholderText(loginScreenStrings.email)).toBeTruthy();
    expect(
      screen.getByPlaceholderText(loginScreenStrings.password),
    ).toBeTruthy();
    expect(screen.getByText(loginScreenStrings.forgotPass)).toBeTruthy();
    expect(screen.getByText(loginScreenStrings.loginBtn)).toBeTruthy();
    expect(screen.getByText(loginScreenStrings.newUser)).toBeTruthy();
    expect(screen.getByText(loginScreenStrings.signUp)).toBeTruthy();
  });

  test('submits form with valid data', async () => {
    const {getByPlaceholderText, getByText} = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Log In'));
  });

  test('navigates to home screen after successful login', async () => {
    const mockNavigation = {
      reset: jest.fn(),
    };

    jest.mock('@react-navigation/native', () => ({
      ...jest.requireActual('@react-navigation/native'),
      useNavigation: () => ({
        navigate: 'Home',
      }),
    }));

    const {getByPlaceholderText, getByText} = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText(loginScreenStrings.loginBtn));
  });
});
