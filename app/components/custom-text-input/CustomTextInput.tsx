import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CustomInputType} from './CustomTextInputType';
import {styleFun} from './CustomTextInputStyle';
import {StaticColors} from '../../themes';
import {Images} from '../../assets';

const CustomTextInput: CustomInputType = (
  {
    testID,
    placeholder,
    onSubmitEditing,
    onChangeText,
    onBlur,
    keyboardType,
    returnKeyType,
    defaultValue,
    error,
    touched,
    setSecureEntryText,
    secureTextEntry,
    multiline = false,
  },
  ref,
) => {
  const styles = styleFun();
  return (
    <View style={styles.inputTextViewStyle}>
      <View style={styles.inputViewStyle}>
        <TextInput
          testID={testID}
          autoCapitalize="none"
          multiline={multiline}
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor={StaticColors.light40}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="dark"
        />
        {setSecureEntryText && (
          <TouchableOpacity
            onPress={() => setSecureEntryText(!secureTextEntry)}>
            <View style={styles.eyeImageViewStyle}>
              <Image
                source={secureTextEntry ? Images.eyeHide : Images.eyeOpen}
                style={styles.eyeImageStyle}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <>
        {error && touched && <Text style={styles.errorTextStyle}>{error}</Text>}
      </>
    </View>
  );
};

export default React.forwardRef(CustomTextInput);
