import React from 'react';
import {ScrollView} from 'react-native';

const KeyboardAwareScrollView: React.FC = ({children}: any) => (
  <ScrollView>{children}</ScrollView>
);

export {KeyboardAwareScrollView};
