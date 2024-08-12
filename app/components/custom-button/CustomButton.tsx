import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {StaticColors, moderateScale} from '../../themes';
import {styles} from './CustomButtonStyle';
import {CustomButtonType} from './CustomButtonType';

const CustomButton: CustomButtonType = ({
  testID,
  title,
  onPress,
  loading,
  customStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.container, customStyle]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          size={moderateScale(20)}
          color={StaticColors.white}
          style={styles.ActivityIndicatorStyle}
        />
      ) : (
        <Text style={styles.lable}> {title} </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
