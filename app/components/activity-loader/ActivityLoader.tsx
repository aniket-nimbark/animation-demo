import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';
import { StaticColors } from '../../themes';

const ActivityLoader = ({isVisible}: {isVisible: boolean}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <ActivityIndicator
        style={styles.loader}
        size="large"
        color={StaticColors.light40}
      />
    </Modal>
  );
};

export default ActivityLoader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StaticColors.overlay,
  },
});
