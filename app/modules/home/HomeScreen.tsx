import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {moderateScale} from '../../themes';
import {Routes} from '../../constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} testID={Routes.home}>
      <Text style={styles.textStyle}>Welcome to HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: '#000',
  },
});
