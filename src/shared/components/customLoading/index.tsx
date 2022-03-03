import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';
import {COLORS, RF} from '../../exporter';

const CustomLoading = ({visible}: {visible: boolean; bgColor?: string}) => {
  return (
    <>
      {visible && (
        <View style={styles.container}>
          <PulseIndicator color={COLORS.SEA_BLUE} size={RF(40)} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomLoading;
