import React, { Dispatch, ForwardedRef, SetStateAction } from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface CustomInputPropType {
  error?: string;
  touched?: boolean;
  setSecureEntryText?: Dispatch<SetStateAction<boolean>>;
}

export type CustomInputType = (
  props: TextInputProps & CustomInputPropType,
  ref: ForwardedRef<TextInput>,
) => React.JSX.Element;
