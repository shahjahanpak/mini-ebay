import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {COLORS, GST, RF} from '../../exporter';
import CustomText from '../customText';

const {WHITE, SEA_BLUE} = COLORS;

const SubmitBtn = ({
  title,
  onPress,
  disabled,
  containerStyle,
  titleColor = WHITE,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle | any;
  titleColor?: string;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.primaryBtn, containerStyle]}
      disabled={disabled}>
      <CustomText bold size={14} color={titleColor}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: SEA_BLUE,
    height: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
    ...GST.SHADOW,
    marginBottom: RF(40),
  },
});

export default SubmitBtn;
