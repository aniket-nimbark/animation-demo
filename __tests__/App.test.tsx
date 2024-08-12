/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from '../app/navigation/stack-navigation';
import {Routes} from '../app/constants';

test('Initial Navigation', () => {
  render(
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>,
  );
  expect(screen.getByTestId(Routes.login)).toBeOnTheScreen();
});
