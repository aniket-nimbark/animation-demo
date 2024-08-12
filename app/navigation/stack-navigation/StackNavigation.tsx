import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {LoginScreen} from '../../modules/login';
import {HomeScreen} from '../../modules';
import {Routes} from '../../constants';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const screenOption: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'slide_from_right',
  };

  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={Routes.login}>
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
