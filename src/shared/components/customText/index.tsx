import React from 'react';
import {Text, TextProps} from 'react-native';
import {COLORS, FONTS, RF} from '../../exporter';

const {BOLD, REGULAR} = FONTS;

interface Props extends TextProps {
  bold: boolean;
  size: number;
  capital: boolean;
  color: any;
  onPress: () => void;
}

const CustomText = (props: Partial<Props>) => {
  const {
    size = 12,
    color = COLORS.BLACK,
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
  } = props;
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: props.bold ? BOLD : REGULAR,
          fontSize: RF(size),
          color,
          // fontWeight: props.bold ? 'bold' : 'normal',
          textTransform: capital ? 'uppercase' : 'none',
        },
        style,
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
